require('dotenv').config();
const config = require('config');
const jwt = require('jsonwebtoken');

function authLogin(req, res, next) {
  console.log('start to check your token');
  const token = req.header('x-auth-token') || req.cookies?.jwt;

  console.log(
    'your token',
    token,
    req.header('x-auth-token'),
    'this will be undefined i bet you',
    req.cookies?.jwt,
  );

  // if (!token) return res.status(403).json('unAuthorized user');

  if (!token) return res.sendStatus(309);

  try {
    const decode = jwt.verify(token, config.get('jwtKey'));

    req.user = decode;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { authLogin };
