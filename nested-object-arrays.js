// create a person object that has a nested address object (with city and zip). Write a function that logs the full address.

const person = {
    address: {
        city: "Bhubaneswar",
        zip: 751012,
    }
}

function personAddress() {
    console.log(person.address.city, person.address.zip);
}

personAddress();

const library = {
    books: [
        {
            title: "Think Grow and Rich",
            author: "Napoleon Hill",
        },
        {
            title: "Cosmology in Space",
            author: "Carl Sagan",
        },
        {
            title: "India After Gandhi",
            author: "Ramachandra Guha"
        },
        {
            title: "The Girl with the Seven Lives",
            author: "Vikas Swarup"
        }
    ],
}



// function logBookTitle() {
//     for (let i = 0; i < library.books.length; i++) {
//         console.log(library.books[i].author);
//     }
// }

function logBookTitle() {
    for (book of library.books) {
        console.log(book.author);
    }
}

logBookTitle();

