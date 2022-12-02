const Bands = require('../models/Bands')

const BandService = {
  get: async (query) => {
    try {
      const bands = await Bands.find(query, { __v: 0 })
      return bands
    } catch (err) {
      throw Error('Error', err)
    }
  },
  getById: async (id) => {
    try {
      const song = await Bands.findById(id)
      return song
    } catch (err) {
      throw Error('Error: ', err)
    }
  },
  create: async (body) => {
    try {
      const newId = await Bands.count() + 1
      Object.assign(body, { _id: newId })
      const newBand = new Bands(body)
      await newBand.save()
    } catch (err) {
      throw Error('Error', err)
    }
  }
}

module.exports = BandService
