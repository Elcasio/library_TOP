// Import stylesheets
import './style.css';

// Write Javascript code!
let library=[[1, "To Kill a Mockingbird", "Harper Lee", 281, false],
[2, "1984", "George Orwell", 328, false],
[3, "The Great Gatsby", "F. Scott Fitzgerald", 180, false],
[4, "Pride and Prejudice", "Jane Austen", 432, false],
[5, "The Catcher in the Rye", "J.D. Salinger", 224, false],
[6, "One Hundred Years of Solitude", "Gabriel Garcia Marquez", 417, false],
[7, "The Hobbit", "J.R.R. Tolkien", 310, false],
[8, "Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 309, false],
[9, "To the Lighthouse", "Virginia Woolf", 209, false],
[10, "The Hunger Games", "Suzanne Collins", 374, false]]

function book(title,author,pages,read){
  this.title= title
  this.author= author
  this.pages= pages
  this.read= read
  this.info = function(){
    let readStatus= 'already read'
    if(!read){readStatus='not read yet'}
    return `${title} by ${author}, ${pages} pages, ${readStatus}`
  } 
}


function addBooktoLibrary(){
  console.log('Agregar un nuevo Libro')
let book= prompt('Nombre del libro:')
let author= prompt('Nombre del Autor:')
let pages= prompt('numero de Paginas:')
let read= prompt('Lo leiste? Y/N').toUpperCase()
if(read=='Y'){read=true}
else{read=false}
let bookArray=[book,author,pages,read]
console.log(bookArray)
library.push(bookArray)
}

console.log(library)
function addRow(){
  let table=document.querySelector('#Tabla')
  library.forEach((book)=>{
  let row=document.createElement("tr")
  let c1 = document.createElement("td");
  let c2 = document.createElement("td");
  let c3 = document.createElement("td");
  let c4 = document.createElement("td");
  let c5 = document.createElement("td");
  let c6 = document.createElement("td");

  c1.innerText = book[0]
  c2.innerText = book[1]
  c3.innerText = book[2]
  c4.innerText = book[3]
  c5.innerText = book[4]
  c6.innerText = book[5]

  row.appendChild(c1);
  row.appendChild(c2);
  row.appendChild(c3);
  row.appendChild(c4);
  row.appendChild(c5);
  row.appendChild(c6);

  table.appendChild(row)
  })
}
addRow()