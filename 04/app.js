console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];


// const navElement = document.querySelector('nav');

// if (navElement){
//     const ulElement = document.createElement('ul');
//     navElement.appendChild(ulElement);
// }

// const ulElement = document.querySelector('ul');
// if(ulElement){
//     const liElement1 = document.createElement('li');
//     const liElement2 = document.createElement('li');
//     const liElement3 = document.createElement('li');
//     ulElement.appendChild(liElement1);
//     ulElement.appendChild(liElement2);
//     ulElement.appendChild(liElement3);
// }

const navElement = document.querySelector('nav');

menuItems.forEach((el => {
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');

    aElement.innerText = el.text;
    aElement.setAttribute('href', el.url)
    navElement.appendChild(liElement);
    liElement.appendChild(aElement);
}))