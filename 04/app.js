console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const nav = document.querySelector('nav');

if(nav) { 
    const newUl = document.createElement('ul'); 
    menuItems.forEach(function(item){
        console.log(item);

        const newLi = document.createElement('li');
        const link = document.createElement('a');
        link.innerText = item.text;
        link.setAttribute('href', item['url']);

        newUl.appendChild(newLi);
        newLi.appendChild(link);
    });

    nav.appendChild(newUl);
}
    // const newUl = document.createElement('ul');
    // const newLi = document.createElement('li');
    // const link = document.createElement('a')
    // link.innerText = 'start';
    // link.setAttribute('href','/');

    // newUl.appendChild(newLi);
    // newLi.appendChild(link);
    // nav.appendChild(newUl);

    // const newLi1 = document.createElement('li');
    // const link1 = document.createElement('a')
    // link1.innerText = 'galeria';
    // link1.setAttribute('href','/gallery');

    // newUl.appendChild(newLi1);
    // newLi1.appendChild(link1);
 
    // const newLi2 = document.createElement('li');
    // const link2 = document.createElement('a')
    // link2.innerText = 'kontakt';
    // link2.setAttribute('href','/contact');

    // newUl.appendChild(newLi2);
    // newLi2.appendChild(link2);
