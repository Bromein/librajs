
//test data~
const myLibrary = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        pages: 859,
        genre: "Fiction",
    },
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        pages: 859,
        genre: "Fiction",
    },
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        pages: 859,
        genre: "Fiction",
    },
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        pages: 859,
        genre: "Fiction",
    },
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        pages: 859,
        genre: "Fiction",
    },
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        pages: 859,
        genre: "Fiction",
    }
];



const librarySection = document.querySelector(".library");
//pickup at how to add forms in js ****************************


function Book(title, author, pages, genre) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
}

function addBookToLibrary(books) {
    books.map(book => {
        let {title, author, pages, genre} = book;
        console.log(book);
        console.log(title)
        let newCard = document.createElement('div');
        newCard.classList.add("card");
        newCard.innerHTML = `<div>Title: ${title}</div><div> Author: ${author}<div>Pages: ${pages}</div><div>Genre: ${genre}</div>`
        
        librarySection.appendChild(newCard);
    })
}




addBookToLibrary(myLibrary)