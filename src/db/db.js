const getModels = require('./relations')
const {config} = require('./config')
const conf = config({env: 'edwinpoueriet.dev'})
const db = getModels(conf.dbConfig)

module.exports = db