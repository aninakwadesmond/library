require('dotenv').config();
const config = require('config');
const { Router } = require('express');
const { validateMessage, Message } = require('../Models/chart-model');
const chatRoute = Router();
const { OpenAI } = require('openai');
const { GoogleGenAI } = require('@google/genai');
// const {} = require('@')
const { authLogin } = require('../auth/user-login');

// console.log(config.get('openaiKey'), process.env.OPEN_AI_KEY);
// const client = new OpenAI({ apiKey: config.get('openaiKey') });

//use "GEMINI_API_KEY" by default

const ai = new GoogleGenAI({});

chatRoute.post('/', [authLogin], async (req, res, next) => {
  const { id } = req.user;
  console.log(req.user, { ...req.body, id });
  console.log('hello start to load me');
  const { error } = validateMessage({ ...req.body, id });
  if (error) return res.status(404).json({ message: error.details[0].message });

  console.log('pass validation');

  //destruct message from request and send to openAi

  const { chats, tagNumber } = req.body;
  console.log('chats', chats, 'tagNumber', tagNumber);
  const { message } = chats;
  console.log('message', message);

  try {
    // gemini api
    console.log('calling gemini...');
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [{ text: message }],
        },
      ],
      config: {
        systemInstruction:
          'You are a helpful library assistant. Always respond with not more than 4 sentences. Be concise and informative.',
        temperature: 0.3, // Lower temperature for more consistent responses
        maxOutputTokens: 500,
      },
    });
    console.log('pass trial');

    console.log('responseAi', response, response.text);
    const text = response?.candidates?.[0]?.content?.parts?.[0]?.text;
    // .split('. ').slice(0, 4).join('. ') + '.';

    //⚠later along the line this will be updataed with a unique userId;
    console.log('model text ', text);

    const user = {
      chats: [
        { role: 'user', message },
        { role: 'model', message: text },
      ],
      id,
      tagNumber,
    };
    const model = { chats: { role: 'model', message: text }, tagNumber, id };

    console.log('user', user, 'model', model);

    const existingUserConversation = await Message.findOne({ id }).select(
      '-password',
    );

    if (existingUserConversation) {
      existingUserConversation.chats[0].push(...user.chats);
      await existingUserConversation.save();
    } else {
      await Message.insertMany([user]);
    }

    const allMessages = await Message.findOne({ id }).select('-password');

    return res.status(200).json(allMessages);
  } catch (error) {
    console.error('gemini full error');
    console.error(error);

    if (error.status === 429) {
      return res.status(429).json({
        message: 'AI is busy. Try again in a minute.',
      });
    }

    res.status(500).json({
      message: 'AI failed',
    });
    // res.status(400).json(error?.message);
    // next(error);
  }
});

chatRoute.get('/', async (req, res) => {
  try {
    const response = await Message.find().select('-_id');
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(error?.message);
  }
});

module.exports = chatRoute;
