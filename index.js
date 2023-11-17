
// Write Javascript code!
let library=[]

const form=document.querySelector('#formulario')

function Book(title,author,pages,read){
  this.title= title
  this.author= author
  this.pages= pages
  this.read= read
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
function createDeleteButton() {
let deleteButton = document.createElement('button')
deleteButton.appendChild('img')
}
console.log(library)
function addRow(book){
  let table=document.querySelector('#Tabla')
  let row=document.createElement("tr")
  let c1 = document.createElement("td");
  let c2 = document.createElement("td");
  let c3 = document.createElement("td");
  let c4 = document.createElement("td");
  let c5 = document.createElement("td");
  let c6 = document.createElement("td");
  

  c1.innerText = library.indexOf(book)
  c2.innerText = book.title
  c3.innerText = book.author
  c4.innerText = book.pages
  c5.innerText = book.read
  c6.appendChild(deleteButton)

  row.appendChild(c1);
  row.appendChild(c2);
  row.appendChild(c3);
  row.appendChild(c4);
  row.appendChild(c5);
  row.appendChild(c6);

  table.appendChild(row)
  
}


form.addEventListener('submit', (e)=>{
  e.preventDefault()

let title = document.getElementById('titulo').value
let author= document.getElementById('autor').value
let pages= document.getElementById('paginas').value
let read= document.getElementById('leido').checked
let  book= new Book(title,author,pages,read)
library.push(book)
addRow(book)
form.reset();
}
)