let myLibrary = [];

function Book(author, title, pages, price) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.price = price;
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let price = document.getElementById("price").value;
  myLibrary.push(new Book(title, author, pages, price));
}

function myFunction(){
  addBookToLibrary();
  renderTitles();
  render();
}

function renderTitles(){

}

function render(){
  let displayBook = ""; 
  
  for (let book of myLibrary) {
    displayBook+="<tr>";
    displayBook+="<td>"+book.title+"</td>";
    displayBook+="<td>"+book.author+"</td>";
    displayBook+="<td>"+book.pages+"</td>";
    displayBook+="<td>"+book.price+"</td>";
    displayBook+="</tr>";
  }
    document.querySelector("tbody").innerHTML = displayBook; 
}