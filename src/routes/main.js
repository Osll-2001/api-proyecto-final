const BandsRouter = require('./bands')
const SongsRouter = require('./songs')
const UsersRouter = require('./users')

const routerApi = (app) => {
  app.use('/bands', BandsRouter)
  app.use('/songs', SongsRouter)
  app.use('/users', UsersRouter)
}

module.exports = routerApi
