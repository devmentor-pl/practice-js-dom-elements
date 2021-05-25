console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];


// Optymalizacja

const nav = document.querySelector('nav');
console.log(nav);

if(nav) {
    const ul = document.createElement('ul');

    menuItems.forEach( function(element, index) {

            const li = document.createElement('li');
            const a = document.createElement('a');

            a.textContent = menuItems[index].text;
            a.setAttribute('url', menuItems[index].url);

            li.appendChild(a);
            ul.appendChild(li);
        });

    nav.appendChild(ul)
    nav.childNodes[1].remove();
}



// Sposób pierwszy

// const nav = document.querySelector('nav');
// console.log(nav)

// if(nav) {

//     const ul = document.createElement('ul')

//     if(ul) {

//         const li = document.createElement('li');
//         const liSecond = document.createElement('li');
//         const liThird = li.cloneNode(false);

//         li.setAttribute('href' , '/');
//         liSecond.setAttribute('href' , '/gallery');
//         liThird.setAttribute('href' , '/contact');

//         li.textContent = 'start'
//         liSecond.textContent = 'galeria'
//         liThird.textContent = 'kontakt'

//         ul.appendChild(li);
//         ul.appendChild(liSecond);
//         ul.appendChild(liThird);
//     }

//     nav.appendChild(ul)

//     nav.childNodes[1].remove();
// }





// // Sposób drugi

// const nav = document.querySelector('nav');
// console.log(nav);

// if(nav) {
//     const ul = document.createElement('ul');

//     if(ul) {
//         for(let i=1; i<=menuItems.length; i++) {
//             ul.appendChild(  document.createElement('li') );
//         }
//     }

//     nav.appendChild(ul)
//     nav.childNodes[1].remove();

//     document.querySelectorAll('li').forEach( function(element, index) {

//         element.textContent = menuItems[index].text;
//         element.setAttribute( 'url', menuItems[index].url );
//     } )
// }
