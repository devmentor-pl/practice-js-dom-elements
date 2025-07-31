console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

// Rozwiązanie "manualne"

const navElement = document.querySelector('nav');
const ulList = document.createElement('ul');

navElement.appendChild(ulList);

// first list item with link

// const firstListItem = document.createElement('li');
// const firstLink = document.createElement('a');
// firstLink.setAttribute('href', menuItems[0].url);
// firstLink.textContent = menuItems[0].text;

// firstListItem.appendChild(firstLink);
// ulList.appendChild(firstListItem);
// console.log(ulList)

// second list item with link

// const secondListItem = document.createElement('li');
// const secondLink = document.createElement('a');
// secondLink.setAttribute('href', menuItems[1].url);
// secondLink.textContent = menuItems[1].text;

// secondListItem.appendChild(secondLink);
// ulList.appendChild(secondListItem);

// third list item with link

// const thirdListItem = document.createElement('li');
// const thirdLink = document.createElement('a');
// thirdLink.setAttribute('href', menuItems[2].url);
// thirdLink.textContent = menuItems[2].text;

// thirdListItem.appendChild(thirdLink);
// ulList.appendChild(thirdListItem);


// Rozwiązanie z wykorzystaniem pętli forEach

menuItems.forEach(item => {
    const listItem = document.createElement('li');
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', item.url);
    linkEl.textContent = item.text;
    listItem.appendChild(linkEl);
    ulList.appendChild(listItem);
})