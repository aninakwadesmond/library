require('dotenv').config();
const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Joi = require('joi');
const PasswordComplexity = require('joi-password-complexity');

const options = {
  symbol: 1,
  numeric: 1,
  min: 3,
  max: 26,
  lowerCase: 1,
  upperCase: 1,
  requirementCount: 2,
};

function validateUSerData(req) {
  const schema = Joi.object({
    fullName: Joi.string().required().min(2),
    // lastName: Joi.string().required().min(2),
    department: Joi.string().required().min(2),
    email: Joi.string().email().required(),
    password: PasswordComplexity(options),
    confirmPassword: Joi.any().valid(Joi.ref('password')).required().messages({
      'any.only': 'Password do not match',
      'any.required': 'Confirm password i required',
    }),
  });

  return schema.validate(req, { abortEarly: false, allowUnknown: false });
}

function validateEmail(req) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
  });

  return schema.validate(req, { abortEarly: false, allowUnknown: false });
}

function validateResetInput(req) {
  const schema = Joi.object({
    token: Joi.string().required(),
    passwordNew: PasswordComplexity(options),
    passwordConfirm: Joi.any()
      .valid(Joi.ref('passwordNew'))
      .required()
      .messages({
        'any.only': 'Password do not match',
        'any.required': 'Confirm password i required',
      }),
  });
  return schema.validate(req, { abortEarly: false, allowUnknown: false });
}

function validateUSerLogin(req) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: PasswordComplexity(options),
  });

  return schema.validate(req, { abortEarly: false, allowUnknown: false });
}

const userLoginSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, minlength: 2 },
    // lastName: { type: String, required: true, minlength: 2 },
    department: { type: String, required: true },

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true, minlength: 4 },
    // confirmPassword: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   minlength: 4,
    // },
  },
  { timestamps: true },
);

//generating a token after everylogin

userLoginSchema.methods.getAuthToken = function () {
  const token = jwt.sign(
    {
      id: this._id,
      // password: this.password,
      email: this.email,
    },
    config.get('jwtKey'),
  );
  return token;
};

const User = mongoose.model('Users', userLoginSchema);

module.exports = {
  validateUSerData,
  User,
  validateUSerLogin,
  validateEmail,
  validateResetInput,
};
