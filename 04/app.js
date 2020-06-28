console.log('DOM');

// struktura do wykorzystania w pętli
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


const nav = document.querySelector('nav');
const ulList = document.createElement('ul');
nav.appendChild(ulList);

// console.log(ulList)


menuItems.forEach(function (item) {

    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    ulList.appendChild(liElement);
    liElement.appendChild(aElement);


    if (aElement) {
        aElement.setAttribute('href', item.url);
        console.log(aElement)
        aElement.innerText = item.text;
    }

})