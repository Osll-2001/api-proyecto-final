const mongoose = require('mongoose')

const Songs = mongoose.model('Songs', {
  _id: { type: String, required: true },
  name: { type: String, required: true },
  band: { type: String, required: true },
  genre: { type: String, required: true },
  album: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  length: { type: String, required: true },
  lyrics: { type: String, required: true },
  link: { type: String, required: true }
})

module.exports = Songs
