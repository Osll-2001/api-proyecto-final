const Songs = require('../models/Songs')

const SongsService = {
  get: async (query) => {
    try {
      const songs = await Songs.find(query, { __v: 0 })
      return songs
    } catch (err) {
      throw Error('Error', err)
    }
  }
}

module.exports = SongsService
