const Sequelize = require('sequelize')
exports.setupSequelize = function (config) {
    return new Sequelize(config)
}
