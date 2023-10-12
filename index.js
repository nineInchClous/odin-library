'use strict';

const bookSect = document.getElementById('books-sect');
const addBtn = document.getElementById('add-book');
const closeModalBtn = document.getElementById('close-modal');
const dialog = document.querySelector('dialog');

const addBookForm = document.querySelector('form');
const nameInput = document.getElementById('name');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');

/**
 * Create a book object
 * @param {string} name Name of the book
 * @param {string} author Name of the author
 * @param {number} pages Number of pages
 * @param {boolean} read True if the book has already been read, otherwise false
 */
function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.changeRead = function () {
    this.read = !this.read;
};

/**
 * Display all books in the library in the html page
 */
function displayBooks() {
    while (bookSect.lastChild) {
        bookSect.removeChild(bookSect.lastChild);
    }
    library.forEach((book, i) => {
        displayBook(book, i);
    });
}

/**
 * Display a book in the html page
 * @param {object} book The book to display
 * @param {number} i The id of the book to display
 */
function displayBook(book, i) {
    const article = document.createElement('article');
    article.className = 'card';

    const divTop = document.createElement('div');
    const name = document.createElement('h2');
    name.textContent = book.name;
    divTop.appendChild(name);
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'dark-btn';
    removeBtn.textContent = 'X';
    removeBtn.setAttribute('data-id', i);
    removeBtn.addEventListener('click', () => {
        library.splice(i, 1);
        displayBooks();
    });
    divTop.appendChild(removeBtn);
    article.appendChild(divTop);

    const author = document.createElement('h3');
    author.textContent = book.author;
    article.appendChild(author);

    const pages = document.createElement('p');
    pages.textContent = book.pages + ' pages';
    article.appendChild(pages);

    const divBot = document.createElement('div');
    const read = document.createElement('p');
    read.textContent = book.read ? 'Already read' : 'Not read yet';
    divBot.appendChild(read);
    article.appendChild(divBot);
    const changeReadBtn = document.createElement('button');
    changeReadBtn.type = 'button';
    changeReadBtn.className = 'dark-btn';
    changeReadBtn.textContent = 'Change read status';
    changeReadBtn.setAttribute('data-id', i);
    changeReadBtn.addEventListener('click', () => {
        library[i].changeRead();
        displayBooks();
    });
    divBot.appendChild(changeReadBtn);

    bookSect.appendChild(article);
}

const library = [];
library.push(new Book('La horde du contrevent', 'Alain Damasio', 780, true));
library.push(new Book('Le mythe de Cthulhu', 'H.P Lovecraft', 50, true));
library.push(new Book('La chute', 'Allbert Camus', 250, false));
displayBooks();

addBtn.addEventListener('click', () => {
    dialog.showModal();
});
closeModalBtn.addEventListener('click', () => {
    dialog.close();
});

addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    library.push(new Book(nameInput.value, authorInput.value, pagesInput.value, readInput.checked));
    displayBooks();

    nameInput.value = '';
    authorInput.value = '';
    pagesInput.value = 0;
    readInput.checked = false;
    dialog.close();
});
