const mongoose = require('mongoose');
const Joi = require('joi');

function validateMessage(req) {
  const schema = Joi.object({
    // chats: Joi.array().items({
    //   Joi.object({
    //   role: Joi.string(),
    //   message: Joi.string(),
    // })}),

    chats: Joi.object({
      role: Joi.string(),
      message: Joi.string(),
    }),

    id: Joi.string().required(),
    tagNumber: Joi.number(),
  });

  return schema.validate(req, { abortEarly: false, allowUnknown: false });
}

const chatMessage = new mongoose.Schema({
  role: { type: String },
  message: { type: String },
});

const messageSchema = new mongoose.Schema({
  chats: [{ type: Array }],
  id: { type: mongoose.SchemaTypes.ObjectId, ref: 'Users' },
  tagNumber: { type: Number, required: true },
});

const Message = mongoose.model('message', messageSchema);

module.exports = { Message, validateMessage };
