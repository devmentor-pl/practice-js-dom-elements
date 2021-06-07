console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navElement = document.querySelector('nav');

if(navElement) {
const ulElement = document.createElement ('ul');
navElement.appendChild(ulElement);

for (let i = 0; i < 3; i++) {

    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);

    const aElement = document.createElement('a');
    liElement.appendChild(aElement);

    if i === 0;
    aElement.setAttribute ('href' , '/')
    aElement.innerText = 'start';

    if i === 1;
    aElement.setAttribute ('href' , 'gallery')
    aElement.innerText = 'galeria';

    if i === 2;
    aElement.setAttribute ('href' , 'contact')
    aElement.innerText = 'kontakt';
    }
}
}

const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navElement = document.querySelector('nav');

if (navElement) {
    const ulElement = document.createElement ('ul');

    menuItems.forEach ((element, index) => {
        const li = document.createElement ('li');
        const a = document.createElement ('a');

        a.setAttribute ( menuItems[i].url);
        a.innerText = menuItems[i].text;

        li.appendChild(a);
        ul.appendChild(li);
    }); 

    navElement.appendChild(ul);
}


