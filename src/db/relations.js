const {
    books,
    pages
} = require('./models')

module.exports = function (config) {
    const Book = books(config)
    const Pages = pages(config)

    /* Here goes all the relations */

    Book.hasMany(Pages)
    Pages.belongsTo(Book)

    /* End */

    return {
        Book,
        Pages
    }
}