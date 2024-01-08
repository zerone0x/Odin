function Books(title, author, pages, isread) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isread = false;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${isread}`;
    }
}

let book1 = new Books('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
console.log(book1.info());

