const mongoose = require('mongoose')

const Schtroumpf = mongoose.Schema({
  pseudo: String,
  password: String,
  role: String,
})
module.exports = mongoose.model('Schtroumpf', Schtroumpf, 'Schtroumpf')
