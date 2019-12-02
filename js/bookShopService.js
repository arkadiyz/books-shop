'use strict'


var gId = 1;
var gBooks = [];
// Your challenge is to build a page that shows a list of
//  books: id,
// name, 
// price,
// imgUrl.
//  We will allow the user – a shop owner – to
// manage the books

function createBook(name, price, imgUrl) {
    return {
        name,
        price,
        imgUrl,
        rate :0,
        id: gId++
    }
}

function createBooks() {

    gBooks.push(createBook('Hamlet',50,'https://img.pngio.com/green-book-png-image-free-image-green-book-png-600_505.png'));
    gBooks.push(createBook('The Bible',20,'https://img.pngio.com/green-book-png-image-free-image-green-book-png-600_505.png'));
    gBooks.push(createBook('Bleak House',34,'https://img.pngio.com/green-book-png-image-free-image-green-book-png-600_505.png'));
    gBooks.push(createBook('The Good Soldier',70,'https://img.pngio.com/green-book-png-image-free-image-green-book-png-600_505.png'));
    gBooks.push(createBook('Rabbit, Run',55,'https://img.pngio.com/green-book-png-image-free-image-green-book-png-600_505.png'));

    return gBooks;
}

function getBooks() {
    
    return gBooks;
}
console.log(createBooks());

function deleteBook(bookId){
    var bookIndex = getBookById(bookId)
    gBooks.splice(bookIndex,1);
}
function addBook(name, price,img){
    gBooks.push(createBook(name,price,img));
}

function updateBook(bookId, bookPrice){
   var book = getBookById(bookId);
   book.price = bookPrice;
   debugger
}
function getBookById(idBook){
    return gBooks.find(function(book){
        return book.id === idBook;
    })
}

