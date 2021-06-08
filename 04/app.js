console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navElement = document.querySelector('nav');

if(navElement) {
const ulElement = document.createElement ('ul');
navElement.appendChild(ulElement);

for (let i = 0; i <3; i++) {

    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);

    if (liElement) {
    const aElement = document.createElement('a');
    liElement.appendChild(aElement);
    
    const aList = document.querySelectorAll('a');
    const text = ['start', 'galeria', 'kontakt'];
    const url = ['/', 'gallery', '/contact'];

    for (let j = 0; j<aList.length; j++) {
        aList[j].innerText = text[j];
        aList[j].setAttribute('href', url[j]);
            }
        }
    }
}


// pętla

const navElement1 = document.querySelector('nav');

if (navElement1) {
    const ulElement1 = document.createElement ('ul');
    navElement1.appendChild(ulElement1);

    menuItems.forEach(function(element) {
        const li = document.createElement ('li');
        ulElement1.appendChild(li);

        const a = document.createElement ('a');

        a.setAttribute ('href',element.url);
        a.innerText = element.text;
        li.appendChild(a);
    }); 
}
