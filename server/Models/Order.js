const Joi = require('joi');
const mongoose = require('mongoose');

function validateUserOrderAddress(req) {
  const schema = Joi.object({
    description: Joi.string(),
    email: Joi.string().email(),
    fullName: Joi.string(),
    shippingAddress: Joi.object({
      city: Joi.string().required(),
      state: Joi.string().required(),
      phoneNumber: Joi.string().required(),
      shippingType: Joi.string().default('free-shipping'),
      zipCode: Joi.string().required(),
    }),
    orderedItems: Joi.array().items(
      Joi.object({
        id: Joi.number(),
        quantity: Joi.number(),
        totalCost: Joi.number(),
        title: Joi.string(),
        formats: Joi.object(),
        category: Joi.string(),
      }),
    ),
  });

  return schema.validate(req, { abortEarly: false, allowUnknown: false });
}

const addressSchema = new mongoose.Schema({
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  state: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  shippingType: { type: String, required: true },
});

const orderItemsSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    quantity: { type: Number, required: true },
    totalCost: { type: Number, required: true },
    title: { type: String, required: true },
    formats: { type: mongoose.Schema.Types.Mixed },
    category: { type: String },
  },
  { strict: false },
);

const ShippingAddresSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: 'Users', required: true },
  fullName: { type: String, required: true },
  description: { type: String, required: true },
  email: { type: String, required: true },
  shippingAddress: addressSchema,
  orderedItems: [orderItemsSchema],
});

const Order = mongoose.model('Order', ShippingAddresSchema);

//module.exports
module.exports = { Order, validateUserOrderAddress };
