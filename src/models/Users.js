const mongoose = require('mongoose')

const Users = mongoose.model('Users', {
  _id: { type: String, required: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  userName: { type: String, requrired: true },
  pass: { type: String, required: true }
})

module.exports = Users
