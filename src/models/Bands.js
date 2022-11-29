const mongoose = require('mongoose')

const Bands = mongoose.model('Bands', {
  name: { type: String, required: true },
  genre: { type: String, required: true },
  yearStart: { type: Number },
  ulrImage: { type: String }
})

module.exports = Bands
