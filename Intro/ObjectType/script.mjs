function Book(
    title,
    author,
    ISBN,
    publicationYear
) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.ISBN = ISBN
}

const bookTitle = "Alice's Adventures in Wonderland"
const bookAuthor = "Lewis Carroll"
const bookPubYear = 1865
const bookISBN = 9798369203415
const result = new Book(bookTitle, bookAuthor, bookISBN, bookPubYear);
console.log(result)