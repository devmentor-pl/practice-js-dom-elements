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

const nav = document.querySelector('nav')
const ul = document.createElement('ul');
nav.appendChild(ul);


menuItems.forEach((el) => {
  let listItem = document.createElement('li');
  let aItem = document.createElement('a');
  ul.appendChild(listItem);
  listItem.appendChild(aItem);
  aItem.setAttribute('href', el.url)
  aItem.innerText = el.text;
});
