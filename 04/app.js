console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navElement = document.querySelector('nav')

if(navElement) {
   const newUl = document.createElement('ul');
   navElement.appendChild( newUl )

   menuItems.forEach(function(element){
        const newLi = document.createElement('li');
        newUl.appendChild( newLi )
        newLi.innerHTML = '<a href="' + element.url + '">' + element.text + '</a>'
   })

    // const newLi1 = document.createElement('li');
    // newLi1.innerHTML = '<a href="/">start</a>'
    // newUl.appendChild( newLi1 )

    // const newLi2 = document.createElement('li');
    // newLi2.innerHTML = '<a href="gallery">galeria</a>'
    // newUl.appendChild( newLi2 )

    // const newLi3 = document.createElement('li');
    // newLi3.innerHTML = '<a href="contact">kontakt</a>'
    // newUl.appendChild( newLi3 ) 
}





