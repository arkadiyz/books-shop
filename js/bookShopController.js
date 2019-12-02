'use strict'
function init() {
    renderBooks()
}

function renderBooks() {
    var strHtml = ``;
    var elBooks = document.querySelector('.table-books');
    var books = getBooks();
    strHtml = books.map(function (book) {
        return `
        <tr>
        <td class = "book-id">${book.id}</td> 
        <td class = "book-name"> ${book.name}</td>
        <td class = "book-price">${book.price}</td>
        
        <td><button type="button" class="btn btn-primary"onclick=bookDetails(${book.id}) data-toggle="modal" data-target="#exampleModalRead" >Read</button></td>
        <td><button type="button" class="btn btn-warning" onclick="readAndUpdateBook(${book.id})">Update</button></td>
        <td><button type="button" class="btn btn-danger" onclick="onDeleteBook(${book.id})">Delete</button></td></tr>
      `
    });
    
    // strHtml = strHtml.join('');
    elBooks.innerHTML = strHtml.join('');
}
function onAddBook(){
    var elName = document.querySelector('.add-name');
    var elPrice = document.querySelector('.add-price');
    var elImg = document.querySelector('.add-img');
    addBook(elName.value, elPrice.value,elImg);  
    
    renderBooks();
}
function readAndUpdateBook (bookId) {
    var bookPrice = +prompt('Plese enter new price');
    updateBook(bookId, bookPrice);
    renderBooks();
}

function bookDetails(bookId){
    var book = getBookById(bookId);
    var elRead = document.querySelector('.modal-body .name-book-read');
    var elPrice = document.querySelector('.modal-body .name-book-price');
    var elImg = document.querySelector('.modal-body .name-book-img');
    elRead.innerHTML = `<p>${book.name}</p>`;
    elPrice.innerHTML = `<p>${book.price}</p>`;
    elImg.innerHTML = `<img style ="height: 100px; width: 150px;" src="${book.imgUrl}"></img>`;
}

function onDeleteBook (idBook) {
    
    deleteBook();
    renderBooks();
}
