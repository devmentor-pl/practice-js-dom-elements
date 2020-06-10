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
  let list = document.createElement('li');
  ul.appendChild(list);
  list.setAttribute('url', el.url)
  list.innerText = el.text;
});
