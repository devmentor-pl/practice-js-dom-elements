console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];


// const list = document.createElement('ul');

// const listItem1 = document.createElement('li');
// const listItem2 = document.createElement('li');
// const listItem3 = document.createElement('li');

// const listLink1 = document.createElement('a');
// const listLink2 = document.createElement('a');
// const listLink3 = document.createElement('a');

// listLink1.setAttribute('href', '/');
// listLink2.setAttribute('href', '/gallery');
// listLink3.setAttribute('href', '/contact');

// listLink1.innerText = 'home';
// listLink2.innerText = 'gallery';
// listLink3.innerText = 'contact';

// const navigation = document.querySelector('nav');

// navigation.appendChild(list);
// list.appendChild(listItem1);
// list.appendChild(listItem2);
// list.appendChild(listItem3);
// listItem1.appendChild(listLink1);
// listItem2.appendChild(listLink2);
// listItem3.appendChild(listLink3);


const list = document.createElement('ul');

let listItem1, listItem2, listItem3;
let listLink1, listLink2, listLink3;
const items = [listItem1, listItem2, listItem3];
const links = [listLink1, listLink2, listLink3];


const navigation = document.querySelector('nav');


menuItems.forEach((element, index) => {
    items[index] = document.createElement('li');
    links[index] = document.createElement('a');

    links[index].setAttribute('href', element.url);
    links[index].innerText = element.text;

    list.appendChild(items[index]);
    items[index].appendChild(links[index]);
});


navigation.appendChild(list);
