const {db} = require('../../../db')
const chalk = require('chalk')

const books = [
    {
        "title": "Personality Plus",
        "description": "a book...",
        "folderName": "personality-plus"
    },
    {
        "title": "Siddhartha",
        "description": "a book...",
        "folderName": "Siddhartha"
    },
    {
        "title": "The call of wild by jack london",
        "description": "a book...",
        "folderName": "the-call-of-wild-by-jack-london"
    }
]
const pages = [
    {
        "pageNumber": 1,
        "bookId": 1,
        "fileName": "Personality-Plus-1"
    },
    {
        "pageNumber": 2,
        "bookId": 1,
        "fileName": "Personality-Plus-2"
    },
    {
        "pageNumber": 3,
        "bookId": 1,
        "fileName": "Personality-Plus-3"
    },
    {
        "pageNumber": 1,
        "bookId": 2,
        "fileName": "Siddhartha-1"
    },
    {
        "pageNumber": 2,
        "bookId": 2,
        "fileName": "Siddhartha-2"
    },
    {
        "pageNumber": 3,
        "bookId": 2,
        "fileName": "Siddhartha-3"
    },
    {
        "pageNumber": 1,
        "bookId": 3,
        "fileName": "The-Call-of-the-Wild-by-Jack-London-1"
    },
    {
        "pageNumber": 2,
        "bookId": 3,
        "fileName": "The-Call-of-the-Wild-by-Jack-London-2"
    },
    {
        "pageNumber": 4,
        "bookId": 2,
        "fileName": "Siddhartha-4"
    },
    {
        "pageNumber": 5,
        "bookId": 2,
        "fileName": "Siddhartha-5"
    },
    {
        "pageNumber": 6,
        "bookId": 2,
        "fileName": "Siddhartha-6"
    },
    {
        "pageNumber": 7,
        "bookId": 2,
        "fileName": "Siddhartha-7"
    },
    {
        "pageNumber": 8,
        "bookId": 2,
        "fileName": "Siddhartha-8"
    },
    {
        "pageNumber": 9,
        "bookId": 2,
        "fileName": "Siddhartha-9"
    },
    {
        "pageNumber": 10,
        "bookId": 2,
        "fileName": "Siddhartha-10"
    },
    {
        "pageNumber": 4,
        "bookId": 1,
        "fileName": "Personality-Plus-4"
    },
    {
        "pageNumber": 5,
        "bookId": 1,
        "fileName": "Personality-Plus-5"
    },
    {
        "pageNumber": 6,
        "bookId": 1,
        "fileName": "Personality-Plus-6"
    },
    {
        "pageNumber": 7,
        "bookId": 1,
        "fileName": "Personality-Plus-7"
    },
    {
        "pageNumber": 8,
        "bookId": 1,
        "fileName": "Personality-Plus-8"
    },
    {
        "pageNumber": 9,
        "bookId": 1,
        "fileName": "Personality-Plus-9"
    },
    {
        "pageNumber": 10,
        "bookId": 1,
        "fileName": "Personality-Plus-10"
    },
    {
        "pageNumber": 3,
        "bookId": 3,
        "fileName": "The-Call-of-the-Wild-by-Jack-London-3"
    },
    {
        "pageNumber": 4,
        "bookId": 3,
        "fileName": "The-Call-of-the-Wild-by-Jack-London-4"
    },
    {
        "pageNumber": 5,
        "bookId": 3,
        "fileName": "The-Call-of-the-Wild-by-Jack-London-5"
    },
    {
        "pageNumber": 6,
        "bookId": 3,
        "fileName": "The-Call-of-the-Wild-by-Jack-London-6"
    },
    {
        "pageNumber": 7,
        "bookId": 3,
        "fileName": "The-Call-of-the-Wild-by-Jack-London-7"
    },
    {
        "pageNumber": 8,
        "bookId": 3,
        "fileName": "The-Call-of-the-Wild-by-Jack-London-8"
    },
    {
        "pageNumber": 9,
        "bookId": 3,
        "fileName": "The-Call-of-the-Wild-by-Jack-London-9"
    },
    {
        "pageNumber": 10,
        "bookId": 3,
        "fileName": "The-Call-of-the-Wild-by-Jack-London-10"
    }
]

async function createBooks () {
    try {
        for (let book of books) {
            await db.Book.create({
                title: book.title,
                description:  book.description,
                folderName: book.folderName
            })
        }
    } catch (e) {
        console.log(chalk.red("Error =====>"), e)
    }
}
async function createPages () {
    try{
        for (let page of pages) {
            await db.Pages.create({
                pageNumber: page.pageNumber,
                bookId:  page.bookId,
                fileName: page.fileName,
            })
        }
    } catch (e) {
        console.log(chalk.red("Error =====>"), e)
    }
}

async function setup() {
    try {
        await createBooks()
        await createPages()
        console.log(chalk.green('Done!, Your database now have data'))
        process.exit(0)
    } catch (e) {
        console.log(e.message)
        process.exit(1)
    }
}

setup()