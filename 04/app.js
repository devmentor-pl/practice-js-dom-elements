console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];


const nav = document.querySelector('nav');
const navList = document.createElement('ul');

for (let i=0; i<menuItems.length; i++){
    const  navItem = document.createElement('li')
    const  link = document.createElement('a')    

    link.href = menuItems[i].url;
    link.textContent=menuItems[i].text;

    navItem.appendChild(link);
    navList.appendChild(navItem);
}

nav.appendChild(navList);

//wersja na bez pętli
/*
const nav = document.querySelector('nav');
const navList = document.createElement('ul');

const  navItem1 = document.createElement('li')
const  link1 = document.createElement('a')
link1['href'] = '/';
link1.textContent='start';
navItem1.appendChild(link1);
navList.appendChild(navItem1);

const  navItem2 = document.createElement('li')
const  link2 = document.createElement('a')
link2['href'] = '/galery';
link2.textContent='galeria';
navItem2.appendChild(link2);
navList.appendChild(navItem2);

const  navItem3 = document.createElement('li')
const  link3 = document.createElement('a')
link3['href'] = '/contact';
link3.textContent='kontakt';
navItem3.appendChild(link3);
navList.appendChild(navItem3)


nav.appendChild(navList);

*/