'use strict';

const library = [];

const addBtn = document.getElementById('add-book');
const closeModalBtn = document.getElementById('close-modal');
const dialog = document.querySelector('dialog');

const addBookForm = document.querySelector('form');
const nameInput = document.getElementById('name');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');

addBtn.addEventListener('click', () => {
    dialog.showModal();
});
closeModalBtn.addEventListener('click', () => {
    dialog.close();
});

addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    library.push(new Book(nameInput.value, authorInput.value, pagesInput.value, readInput.checked));
    dialog.close();
});

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

