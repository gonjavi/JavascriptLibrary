let myLibrary = [];

function Book(author, title, pages, read, price) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.price = price;
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let checkbox = document.getElementById("read");
  let price = document.getElementById("price").value;
  let read;

  if(checkbox.checked == true){
    read = "Yes";
  }else{
    read = "No";
  }

  myLibrary.push(new Book(title, author, pages, read, price));
}

function myAddBooks(){
  addBookToLibrary();
  render();
}


function render(){
  let displayBook = ""; 
  
  for (let book of myLibrary) {
    displayBook += "<tr>";
    displayBook += "<td>"+book.title+"</td>";
    displayBook += "<td>"+book.author+"</td>";
    displayBook += "<td>"+book.pages+"</td>";
    displayBook += "<td>"+book.read+"</td>";
    displayBook += "<td>"+book.price+"</td>";
    displayBook += "<td><button type='button' id='remove' onclick='removeBook("+myLibrary.indexOf(book)+")'>Delete</button></td>";
    displayBook += "<td><button type='button' id='changeRead' onclick='changeStatus("+myLibrary.indexOf(book)+")'>Change Status</button></td>";
    displayBook += "</tr>";
  }
    document.querySelector("tbody").innerHTML = displayBook; 
}

function removeBook(index){
 myLibrary.splice(index,1);
 render();
}

function changeStatus(index){
  for (let b of myLibrary){
    if (myLibrary.indexOf(b) === index){
      if (b.read === "Yes"){
        b.read = "No";
      }else{
        b.read = "Yes";
      } 
    }
  }
  render();
}