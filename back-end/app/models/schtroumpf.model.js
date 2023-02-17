const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Schtroumpf', {
  pseudo: Joi.string().allow(),
  password: Joi.string(),
  role: Joi.string(),
  idS: Joi.number(),
})
