
const menuItems = [{
    text: 'start',
    url: '/'
},
{
    text: 'galeria',
    url: '/gallery'
},
{
    text: 'kontakt',
    url: '/contact'
},
];
const ulElement = createElement('ul');
const navElement = document.querySelector('nav');
navElement.appendChild(ulElement);
for(let i=0; i<menuItems.length; i++) {
    let liElement = document.createElement('li'); 
    ulElement.appendChild(liElement);
    let aElement = document.createElement('a');
    liElement.appendChild(aElement)
}

const menuList = ulElement.querySelector('...')
menuList.forEach(function(element, index) {
    ...
})

//Utknąłem, nie mam pomysłu jak poprawnie kończyć zadanie. 





