console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
  {text: 'start', url: '/'},
  {text: 'galeria', url: '/gallery'},
  {text: 'kontakt', url: '/contact'},
];

const navEl = document.querySelector('nav');
if (navEl) {
  const navList = document.createElement('ul');
  navEl.appendChild(navList);
  menuItems.forEach((item, index) => {
    const listItem = document.createElement('li');

    navList.appendChild(listItem);
    const listLink = document.createElement('a');
    listLink.innerText = menuItems[index].text;
    listLink.href = menuItems[index].url;
    listItem.appendChild(listLink);
  });
}
