module.exports = [
    `
        create table books
        (
            id serial not null
                constraint books_pk
                primary key,
            title varchar(200),
            description varchar(400),
            folder_name varchar(400)
        );
    `,
    `
        create table pages
        (
            id serial not null
                constraint pages_pk
                primary key,
            page_number int,
            book_id int,
            file_name varchar(400),
            constraint pages_books__fk
            foreign key (book_id) references books
        );
    `,
]