const Songs = require('../models/Songs')

const SongsService = {
  get: async (query) => {
    try {
      const songs = await Songs.find(query, { __v: 0 })
      return songs
    } catch (err) {
      throw Error('Error', err)
    }
  },
  create: async (body) => {
    try {
      const newId = await Songs.count() + 1
      Object.assign(body, { _id: newId })
      const newSong = new Songs(body)
      await newSong.save()
    } catch (err) {
      throw Error('Error', err)
    }
  }
}

module.exports = SongsService
