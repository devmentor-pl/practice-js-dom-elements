console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];


const elementNav = document.querySelector('nav');

if (elementNav) {
    const elementUl = document.createElement('ul');
    elementNav.appendChild(elementUl);

    menuItems.forEach(function (element) {
        // console.log(element);
        // console.log(index);

        const objectFromMenuItems = element;
        console.log(objectFromMenuItems);


        const elementLi = document.createElement('li');
        elementUl.appendChild(elementLi);

        const elementA = document.createElement('a');
        elementLi.appendChild(elementA);

        elementA.innerText = objectFromMenuItems.text;



        elementA.setAttribute('href', objectFromMenuItems.url);



    });




}

//Pierwsza metoda


// const navElement = document.querySelector('nav')

// if (navElement) {
//     const ulElement = document.createElement('ul');
//     navElement.appendChild(ulElement);


//     const liElement1 = document.createElement('li');
//     ulElement.appendChild(liElement1);

//     const aElement1 = document.createElement('a');
//     liElement1.appendChild(aElement1);
//     aElement1.setAttribute('href', './');
//     aElement1.innerText = 'Start';




//     const liElement2 = document.createElement('li');
//     ulElement.appendChild(liElement2);

//     const aElement2 = document.createElement('a');
//     liElement2.appendChild(aElement2);
//     aElement2.setAttribute('href', './galeria');
//     aElement2.innerText = 'Galeria';



//     const liElement3 = document.createElement('li');
//     ulElement.appendChild(liElement3);

//     const aElement3 = document.createElement('a');
//     liElement3.appendChild(aElement3);
//     aElement3.setAttribute('href', './kontakt');
//     aElement3.innerText = 'Kontakt';



// }