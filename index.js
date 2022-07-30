let myLibrary = [];


// Constructor Function
function Book(title, pages, author, read) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.red = read;   
}

// This function takes constructor parameters and return in written form
Book.prototype.returnBook = function(){
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}.`
}

// This function will take user input and store it in our array as an object
function addBookToLibrary() {
  
}

function printBooks(){

}