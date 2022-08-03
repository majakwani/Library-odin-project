const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const cardParent = document.querySelector('.right-part');
let readButton = document.querySelector('.read-button');

let myLibrary = [];
let booksToPrint = [];


// Constructor Function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    
    if(read == true){
        this.read = "Read"
    }
    else{
        this.read = "Not Read"
    }
}

// This function takes constructor parameters and return in written form
Book.prototype.returnBook = function(){
    console.log (`${this.title} by ${this.author}, ${this.pages}, ${this.read}.`);
}

// This function will take user input and store it in our array as an object
function addBookToLibrary() {
    let book = new Book(title.value, author.value, pages.value, read.checked)
    myLibrary.push(book);
    booksToPrint.push(book);
    printBooks();
}

function printBooks(){
    booksToPrint.forEach(element => {
        let card = document.createElement('div');
        card.classList.add("card", "flex");
        
        card.innerHTML = `<div class="para">
        <p>Title : ${element.title}</p>
    <p>Author : ${element.author}</p>
    <p>Pages : ${element.pages}</p>
    </div>
    <div class="buttons flex">
        <button type="button" class="read-button">${element.read}</button>
        <button type="button" class="delete-button">Delete</button>
    </div>`;

    if(element.read == 'Read'){
        readButton.classList.add("green");
    }
    else{
        readButton.classList.add("red");
    }

    cardParent.append(card);
    booksToPrint.pop();

    });
}
