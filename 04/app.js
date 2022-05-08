console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

//part1

// const menu = document.querySelector('nav')
// menu.innerHTML=`<ul>
// <li><a href="/">start</a></li>
// <li><a href="/gallery">galeria</a></li>
// <li><a href="/contact">kontakt</a></li>
// </ul>`

// end of part1

// part2

let liCodeAll = ''
let menuCodeAll = ''
const liMenu = menuItems.forEach(function(object) {
    let textMenu = object.text
    let linkMenu = object.url
    let liCodeOneLine = '<li><a href="' + linkMenu + '">' + textMenu + '</a></li>'
    liCodeAll += liCodeOneLine
})

menuCodeAll = '<ul>' + liCodeAll + '<ul>'

const menu = document.querySelector('nav')
menu.innerHTML = menuCodeAll

//end of part2