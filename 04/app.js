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

const navEl = document.querySelector('nav');
const ulEl = document.createElement('ul');
if (navEl) {
    navEl.appendChild(ulEl);
    for (let i = 0; i < 3; i++) {
        let liEl = document.createElement('li');
        let aEl = document.createElement('a')
        ulEl.appendChild(liEl);
        liEl.appendChild(aEl);
    }
}
const aElList = ulEl.querySelectorAll('a');

aElList.forEach(function (element, index) {
    element.setAttribute('href', menuItems[index]['url']);
})

aElList.forEach(function (element, index) {
    element.textContent = menuItems[index]['text'];
});