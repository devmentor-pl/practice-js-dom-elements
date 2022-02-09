
const nav = document.querySelector('nav')

const ulHTML = document.createElement('ul')

let newUl = nav.appendChild(ulHTML)

let ulLength = newUl.children.length

let newLi
let arrLi = [];

while (ulLength < 3) {
  ulLength++;
  newLi = document.createElement('li')
  newUl.appendChild(newLi)
  arrLi.push(newLi)
}

arrLi[0].innerHTML = '<a href="/">start</a>'
arrLi[1].innerHTML = '<a href="/gallery">galeria</a>'
arrLi[2].innerHTML = '<a href="/contact">kontakt</a>'


const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

menuItems.forEach(function(objects) {
  for(keys in objects) {
    const values = objects[keys]
    if (values === 'start') 
      arrLi[0].innerHTML = '<a href=/>' + values + '</a>'
    if (values === 'galeria') 
      arrLi[1].innerHTML = '<a href=/gallery>' + values + '</a>'
    if (values === 'kontakt') 
      arrLi[2].innerHTML = '<a href=/contact>' + values + '</a>'
    }  
  })
  
  console.log(document.body)





