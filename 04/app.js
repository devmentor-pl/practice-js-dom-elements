console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

// const list = document.createElement('ul');
// const item1 = document.createElement('li');
// const item2 = document.createElement('li');
// const item3 = document.createElement('li');
// const link1 = document.createElement('a');
// const link2 = document.createElement('a');
// const link3 = document.createElement('a');

// list.appendChild(item1);
// item1.appendChild(link1);
// link1.setAttribute('href', '/');
// link1.innerHTML = 'start';
// list.appendChild(item2);
// item2.appendChild(link2);
// link2.setAttribute('href', '/gallery');
// link2.innerHTML = 'galeria';
// list.appendChild(item3);
// item3.appendChild(link3);
// link3.setAttribute('href', '/contact');
// link3.innerHTML = 'kontakt';

// const navigation = document.querySelector('nav');
// if(navigation){
//     navigation.appendChild(list);
// }
const list = document.createElement('ul');

const nav = document.querySelector('nav')
if(nav){
    menuItems.forEach(function (element){
        const item = document.createElement('li');
        const link = document.createElement('a');
        list.appendChild(item);
        item.appendChild(link);

        link.innerHTML = element.text;
        link.setAttribute('href', element.url);

        nav.appendChild(list);
    });

}