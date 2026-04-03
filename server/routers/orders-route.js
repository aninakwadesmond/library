const axios = require('axios');
const _ = require('lodash');
const { Router } = require('express');
const { authLogin } = require('../auth/user-login');
const { Order, validateUserOrderAddress } = require('../Models/Order');

const orderRoute = Router();

orderRoute.post('/', [authLogin], async (req, res) => {
  //GETTING the id of the user automatically from jwt
  // console.log('pass auth can order items', req.user);

  // console.log('decoded jwt', req.user, 'req body ', req.body);
  const { id: userId } = req.user;

  // console.log('user ID', userId);

  // console.log('order passsed authentication', userId, req.body);

  const data = {
    ...req.body,
    orderedItems:
      typeof req.body.orderedItems === 'string'
        ? JSON.parse(req.body.orderedItems)
        : req.body.orderedItems,
    // formats: JSON.parse(req.body.formats),
  };

  console.log('data hurry', data, data.formats);

  // console.log('before joi validation', data, req.body);
  const { error } = validateUserOrderAddress(data);
  if (error) return res.status(400).json(error.details[0].message);

  // console.log('after joi validation');

  const { orderedItems: items } = req.body;
  const orderedItems = items;
  console.log('request is here', orderedItems);

  const user = await Order.findOne({ userId });
  console.log('user', user);
  if (user) {
    console.log('start');
    user.orderedItems.push(...data.orderedItems);
    console.log('before end');
    await user.save();
    console.log(' end');

    console.log('new items', user.orderedItems, user.orderedItems.length);
    return res
      .status(200)
      .json({ message: 'Succefullly added Data', status: 200 });
  }

  // console.log('no error in validation');

  console.log('lets create');

  try {
    console.log('before create');
    const dataresponse = await Order.create({
      ..._.pick(req.body, [
        'fullName',
        'description',
        'email',
        'shippingAddress',
      ]),
      userId,
      orderedItems: data.orderedItems,
    });
    console.log('data from create ', dataresponse);

    return res
      .status(200)
      .json({ message: 'Succefullly added Data' }, { status: 200 });
  } catch (error) {
    return res.status(404).json({ message: 'Cant not proceed with order' });
  }
});

orderRoute.get('/me', [authLogin], async (req, res) => {
  const { id: userId } = req.user;
  console.log('userId', userId);
  const user = await Order.findOne({ userId }).select('-userId');

  console.log('users order', user);
  if (!user) return res.sendStatus(204).json([]);

  return res.status(200).json(user);
});

orderRoute.post('/pay', [authLogin], async (req, res) => {
  const { id, email } = req.user;
  if (!id || !email)
    return res.status(404).json({ message: 'unAuthorized user' });

  console.log('pass check id, emial this the request body', req.body);

  const { amount } = req.body;
  if (!amount) return res.status(404).json({ message: 'No amount passed' });

  try {
    console.log('set for response');
    const response = await axios.post(
      'https://api.paystack.co/transaction/initialize',
      {
        email,
        amount: amount * 100,
        currency: 'GHS',
        callback_url: `https://library-mangement-1.onrender.com/`,
        metadata: { userId: id },
      },
      {
        headers: { Authorization: `Bearer ${process.env.PAYsTACK_SECRET_KEY}` },
      },
    );

    console.log(process.env.PAYsTACK_SECRET_KEY, 'keys');
    console.log('your response', response.data.data);
    return res.status(200).json(response.data.data);
  } catch (error) {
    console.error('PAYSTACK ERROR:', error.response?.data || error.message);

    return res.status(500).json({
      error: error.response?.data || error.message,
    });
  }
});

orderRoute.post('/verify', [authLogin], async (req, res) => {
  const { reference } = req.body;
  const response = await axios.get(
    `https://api.paystack.co/transaction/verify/${reference}`,
    {
      headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` },
    },
  );

  return res.status(200).json(response.data);
});

module.exports = orderRoute;
