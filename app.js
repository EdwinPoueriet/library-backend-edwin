const {router, get} = require('microrouter')
const cors = require('micro-cors')()
const {getBooks} = require('./src/controllers/books');

const routes = cors(router(
    get('/book/(:id)/page/(:pageNumber)/(:type)', getBooks),
    get('/book/(:id)/page/(:pageNumber)', getBooks),
    get('/book/(:id)', getBooks),
    get('/books', getBooks),
    get('/', ()=> "welcome to the library!")
))

module.exports = routes
