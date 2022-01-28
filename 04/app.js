console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const nav = document.querySelector('nav');

if(nav !== null) {
    const list = document.createElement('ul');
    nav.appendChild(list);

    menuItems.forEach(function(element){
        const item = document.createElement('li');
        item.innerHTML = '<a href="' + element.url + '">' + element.text + '</a>';
        list.appendChild(item);
    });
}


// const nav = document.querySelector('nav');
// const list = document.createElement('ul');
// const item1 = document.createElement('li');
// const item2 = document.createElement('li');
// const item3 = document.createElement('li');

// item1.innerHTML = '<a href="/">home</a>';
// item2.innerHTML = '<a href="/gallery">gallery</a>';
// item3.innerHTML = '<a href="/contact">contact</a>';

// nav.appendChild(list);
// list.appendChild(item1);
// list.appendChild(item2);
// list.appendChild(item3);






