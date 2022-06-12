console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];

// First way

const renderListItems = function (attribute, value, text) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.setAttribute(attribute, value);
    link.innerText = text;

    listItem.appendChild(link);

    return listItem;
};

const render = function () {
    const container = document.querySelector('nav');
    const ul = document.createElement('ul');
    container.appendChild(ul);
    ul.appendChild(renderListItems('href', '/', 'start'));
    ul.appendChild(renderListItems('href', '/gallery', 'galeria'));
    ul.appendChild(renderListItems('href', '/contact', 'kontakt'));
    return container;
};

render();

// Second way

const render2 = function () {
    const container = document.querySelector('nav');
    const ul = document.createElement('ul');

    menuItems.forEach(function (element) {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        container.appendChild(ul);
        ul.appendChild(listItem);
        listItem.appendChild(link);
        link.innerText = element.text;
        link.href = element.url;
    });
    return container;
};

render2();