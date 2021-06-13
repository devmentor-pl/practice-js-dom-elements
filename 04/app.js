console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];

const navElement = document.querySelector('nav');

const ulElement = document.createElement('ul');
navElement.appendChild(ulElement);


menuItems.forEach(function (item) {
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);

    const aElement = document.createElement('a');
    liElement.appendChild(aElement);

    aElement.innerText = item.text;
    aElement.setAttribute("href", item.url);

    console.log(liElement);
    console.log(aElement);
})



    // pętla

const navElement1 = document.querySelector('nav');

if (navElement1) {
    const ulElement1 = document.createElement('ul');
    navElement1.appendChild(ulElement1);

    menuItems.forEach(function (element) {
        const li = document.createElement('li');
        ulElement1.appendChild(li);

        const a = document.createElement('a');

        a.setAttribute('href', element.url);
        a.innerText = element.text;
        li.appendChild(a);
    });
}
