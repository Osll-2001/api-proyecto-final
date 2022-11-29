const BandsRouter = require('./bands')
const SongsRouter = require('./songs')

const routerApi = (app) => {
  app.use('/bands', BandsRouter)
  app.use('/songs', SongsRouter)
}

module.exports = routerApi
