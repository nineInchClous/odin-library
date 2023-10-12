'use strict';

const library = [];
const addBtn = document.getElementById('add-book');
const closeModalBtn = document.getElementById('close-modal');
const dialog = document.querySelector('dialog');

console.log('coco');

addBtn.addEventListener('click', () => {
    dialog.showModal();
});
closeModalBtn.addEventListener('click', () => {
    dialog.close();
});

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}

