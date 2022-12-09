const mongoose = require('mongoose')

const Bands = mongoose.model('Bands', {
  _id: { type: String, required: true },
  name: { type: String, required: true },
  genre: { type: String, required: true },
  yearStart: { type: Number },
  urlImage: { type: String }
})

module.exports = Bands
