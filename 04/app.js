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
    listItem.innerHTML = `<a href=${menuItems[index].url}>${menuItems[index].text}</a>`;

    navList.appendChild(listItem);
  });
}
