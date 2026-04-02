require('dotenv').config();
const config = require('config');
const { Router } = require('express');
const { authLogin } = require('../auth/user-login');
const verifyRoute = Router();
const jwt = require('jsonwebtoken');

verifyRoute.get('/', async (req, res) => {
  // console.log('verify started');
  try {
    const token = req.header('x-auth-token') || req.cookies?.jwt;
    console.log('token', token);
    if (!token) return res.sendStatus(401);

    console.log('before token ', token, 'jwtKey', config.get('jwtKey'));
    const decode = jwt.verify(token, config.get('jwtKey'));
    console.log('decode', decode);
    if (!decode) return res.sendStatus(401);

    return res.status(200).json({ message: 'Ok', status: 200 });
  } catch (error) {}
});

module.exports = { verifyRoute };
