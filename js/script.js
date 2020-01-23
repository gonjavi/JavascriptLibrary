let myLibrary = [["uno", "dos", "tres"],
                 ["uno", "dos", "tres"]];

table = document.getElementById("table");

for (var i = 0; i < myLibrary.length; i++){
  for (var j = 0; j < myLibrary[i].length; j++){
    table.rows[i].cells[j].innerHTML = myLibrary[i][j];
  }
}


function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  myLibrary.push(new Book(title,author,pages));
}

