const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if(read==true){
        this.read="yes";
    }else{
        this.read ="no";
    };
};

function addBookToLibrary(book){
    myLibrary.push(book);
    console.log(myLibrary);
};

const dialog = document.querySelector("dialog")
const addButton = document.querySelector("#addBook")
const submitButton = document.querySelector("#submit")

addButton.addEventListener("click", () => {
    dialog.showModal();
});

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const bookshelf = document.querySelector(".bookshelf");


function clearFields (){
    title.value = "";
    author.value = "";
    pages.value = "0";
    read.checked = false;
}

function markRead(e){
    myLibrary[e.target.dataset.index].read="yes";
    showBooks();
}

function removeBook(e){
    myLibrary.splice(e.target.dataset.index,1);
    showBooks();
}

function showBooks(){
    bookshelf.innerHTML = ""
    for (let i = 0; i < myLibrary.length; i++){
        bookshelf.innerHTML+=`<div class="book">
        <h2>${myLibrary[i].title}</h2>
        <h3>By:${myLibrary[i].author}</h3>
        <p>Page count: ${myLibrary[i].pages}</p>
        <p>Read? ${myLibrary[i].read}</p>
        <button class="book-button read" data-index="${i}">Read</button>
        <button class="book-button remove" data-index="${i}">Remove</button>
        </div>`
    };

}

function addData (){
    addBookToLibrary(new Book(title.value,author.value,pages.value,read.checked));
    clearFields();
    dialog.close();
    showBooks();
    const readButtons = document.querySelectorAll(".book-button.read");
    readButtons.forEach(button => button.addEventListener("click",markRead));
    const removeButton = document.querySelectorAll(".book-button.remove");
    removeButton.forEach(button => button.addEventListener("click",removeBook));
};