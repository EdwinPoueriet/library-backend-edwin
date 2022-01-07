const {setupSequelize} = require('../setUpDb')
const Sequelize = require('sequelize')

module.exports = function (config) {
    let sequelize = setupSequelize(config);

    return sequelize.define('pages', {
            pageNumber: {
                type: Sequelize.INTEGER,
                field: 'page_number'
            },
            bookId: {
                type: Sequelize.INTEGER,
                field: 'book_id'
            },
            fileName: {
                type: Sequelize.STRING,
                field: 'file_name'
            }
        },{
            tableName:'pages',
            timestamps: false
        }
    )
}