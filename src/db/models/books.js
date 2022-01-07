const {setupSequelize} = require('../setUpDb')
const Sequelize = require('sequelize')

module.exports = function (config) {
    let sequelize = setupSequelize(config);

    return sequelize.define('books', {
            title: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            folderName: {
                type: Sequelize.STRING,
                field: 'folder_name'
            }
        },{
            tableName:'books',
            timestamps: false
        }
    )
}