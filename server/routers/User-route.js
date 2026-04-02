require('dotenv').config();
const config = require('config');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const _ = require('lodash');
const { Router } = require('express');
const {
  validateUSerData,
  User,
  validateUSerLogin,
  validateEmail,
  validateResetInput,
} = require('../Models/user-model');
const welcomeText = require('../utils/emails/welcome-text');
const transporter = require('../utils/emails/transporter');
const { authLogin } = require('../auth/user-login');
const Token = require('../utils/emails/token');
// const { transporter } = require('../utils/emails/transporter');
const UserRoute = Router();

//posting new user;
UserRoute.post('/register', async (req, res) => {
  try {
    console.log('here, ready to register user', req.body);
    const { error } = validateUSerData(req.body);
    if (error)
      return res
        .status(404)
        .json(error.details[0].message || 'Error: Failed to post user');

    const user = new User(
      _.pick(req.body, [
        'email',
        'password',
        'fullName',
        'department',
        'confirmPassword',
      ]),
    );

    //hashing password with bcrypt;

    const salt = await bcrypt.genSalt(10);
    console.log('salt', salt);
    const hashedPassword = await bcrypt.hash(user.password, salt);

    user.password = hashedPassword;

    //generate a token for  a user after a successful login

    console.log('password12', user.password, 'before saved');

    await user.save();
    const token = user.getAuthToken();

    console.log('after save');

    const text = welcomeText(req);

    console.log('after welcome');

    //sending my email after save
    const mailOptions = {
      from: `"Library Management System" <${config.get('auth.email_user')}>`,
      to: user.email,
      subject: '🔐 New Login to Your Library Account',

      html: text,
    };

    transporter.sendMail(mailOptions);
    //set cookies
    const isProd = process.env.NODE_ENV === 'production';
    const cookieOptions = {
      httpOnly: true,
      secure: isProd,
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000 * 7, //max 1 day
      path: '/',
      // domain: 'localhost',
    };
    res.cookie('jwt', token, cookieOptions);

    console.log('cookie , set');

    return res
      .status(200)
      .header('x-auth-token', token)
      .json({ message: 'successfully logged in', status: 202 });
  } catch (error) {
    return res.status(400).json(error?.message || 'Error in getting data');
  }
});

//login

UserRoute.post('/login', async (req, res) => {
  //validate users request email or password
  const { error } = validateUSerLogin(req.body);
  if (error) return res.status(404).json(error?.details[0].message);

  console.log('pass error', error);
  //checking usernameInput with what the cookies pass;
  // if (req.body.email !== req.user.email) {
  //   return res.status(403).json({ message: 'Incorrect email or password' });
  // }

  //destruct email and hashverifies from authentication pass
  const { email, password: hashedPassword } = req.body;

  console.log('req-body', email, hashedPassword, req.body);
  //if username exist in teh mongoosedb;
  const existUser = await User.findOne({ email });
  if (!existUser)
    return res
      .status(404)
      .json('User does not exist in the db.Invalid email or password');

  //if email matches the current email if

  //if user exist check password;
  console.log('existed user', existUser);
  console.log(
    'start login',
    req.body,
    req.body.password,
    hashedPassword,
    existUser.password,
  );

  const comparePassword = await bcrypt.compare(
    req.body.password,
    existUser.password,
  );
  console.log('start login', comparePassword);
  if (!comparePassword)
    return res.status(404).json('Incorrect Email or Password');

  function tokengenerator() {
    const token = jwt.sign(
      {
        id: existUser._id,
        // password: this.password,
        email: existUser.email,
      },
      config.get('jwtKey'),
    );
    return token;
  }
  const token = tokengenerator();
  console.log('token', token);
  const isProd = process.env.NODE_ENV === 'production';
  const cookieOptions = {
    httpOnly: true,
    secure: isProd,
    sameSite: 'none',
    maxAge: 24 * 60 * 60 * 1000 * 7, //max 1 day
    path: '/',
    // domain: 'localhost',
  };
  res.cookie('jwt', token, cookieOptions);

  //if correct email and password login
  // console.log('ready to login', req.user);
  return res.status(200).json({ message: 'succefully login', status: 200 });
});

//logout
UserRoute.post('/logout', [authLogin], async (req, res, next) => {
  //reset the jwt
  const isProd = process.env.NODE_ENV === 'production';
  const options = {
    httpOnly: true,
    secure: isProd,
    sameSite: 'none',
    maxAge: 0,
  };
  res.cookie('jwt', '', options);

  return res.status(200).json({ message: 'logout successful' });
});

let token = null;
let userEmail = null;

UserRoute.post('/forgetPassword', [authLogin], async (req, res) => {
  console.log('reached data', req.body);
  const { error } = validateEmail(req.body);
  if (error) return res.status(404).json({ message: error.details[0].message });

  console.log('pass email');

  token = Math.floor(Math.random() * 99999 + 10000);

  try {
    const user = await User.findOne({ email: req.body.email });
    console.log('user', user);

    const text = Token(user, token);

    if (!user)
      return res.status(400).json({ message: 'Invalid User . No user exits' });

    const mailOptions = {
      from: `"Library Management System" <${config.get('auth.email_user')}>`,
      to: user.email,
      subject: '🔐 Token to reset password',

      html: text,
    };

    console.log('before transport');
    transporter.sendMail(mailOptions);
    console.log('after transport', {
      message: 'token sent to your email',
      token: token,
    });
    userEmail = user.email;
    return res.status(200).json({ message: 'message sent', token: token });
  } catch (error) {
    console.error('error whole', error);
    res.status(400).json(error?.message);
  }
});

UserRoute.post('/reset', async (req, res) => {
  console.log('req.body', req.body);
  const { error } = validateResetInput(req.body);
  console.log('error', error);
  if (error) return res.status(404).json({ message: error.details[0].message });

  console.log('no error', token, userEmail);
  console.log(Number(req.body.token), token);
  if (Number(req.body.token) !== token)
    return res
      .status(400)
      .json({ message: 'Invalid token, pleease check your email' });
  try {
    const user = await User.findOne({ email: userEmail });
    console.log('user found', user);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.passwordNew, salt);
    user.password = hashedPassword;
    console.log('before save', user);

    await user.save();
    console.log('after save');

    return res
      .status(200)
      .json({ message: 'password succefully updated', status: 300 });
  } catch (error) {
    res.status(400).json(error || error?.message);
  }

  // res.status(200).json({ token, userEmail });
});
module.exports = UserRoute;
