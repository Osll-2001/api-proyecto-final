const Users = require('../models/Users')

const UsersService = {
  get: async (query) => {
    try {
      const users = await Users.find(query, { __v: 0 })
      return users
    } catch (err) {
      throw Error('Error: ', err)
    }
  },
  getById: async (id) => {
    try {
      const user = await Users.findById(id)
      return user
    } catch (err) {
      throw Error('Error: ', err)
    }
  },
  create: async (body) => {
    try {
      const newId = await Users.count() + 1
      Object.assign(body, { _id: newId })
      const newUser = new Users(body)
      await newUser.save()
    } catch (err) {
      throw Error('Error: ', err)
    }
  },
  updatePartial: async (id, body) => {
    try {
      const user = await Users.findOne({ _id: id })
      Object.assign(user, body)
      user.save()
    } catch (err) {
      throw Error('Error: ', err)
    }
  },

  updateComplete: async (id, body) => {
    try {
      const user = await Users.findOne({ _id: id })
      Object.assign(user, body)
      user.save()
    } catch (err) {
      throw Error('Error: ', err)
    }
  },
  delete: async (id) => {
    try {
      const user = await Users.findOne({ _id: id })
      await user.remove()
    } catch (err) {
      throw Error('Error: ', err)
    }
  }
}

module.exports = UsersService
