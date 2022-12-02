console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navEl = document.querySelector('nav');

//wersja z pętlą



// wersja bez pętli


if(navEl) {
    const newUl = document.createElement('ul');
    navEl.appendChild(newUl);
    console.log(newUl.innerHTML);
    
    if(newUl) {
        const newLi = document.createElement('li');
        newUl.appendChild(newLi)
        console.log(newLi.innerHTML)
    
        if(newLi) {
            const link = document.createElement('a');

            if(!link.hasAttribute("href")) {
                link.setAttribute("href", "/");
                link.innerText = 'start';
            }
            newLi.appendChild(link);
            console.log(newLi.innerHTML);
        }
    }

    const newLi = document.querySelector("li");
    const newLi2 = newLi.cloneNode(true);
    const newLi3 = newLi.cloneNode(true);
    newUl.appendChild(newLi2);
    newUl.appendChild(newLi3);
    
    if(newLi2) {
        const link2 = document.querySelector("li:nth-child(2) > a ");
        link2.setAttribute("href", "/gallery");
        link2.innerText = 'galeria';
    }

    if(newLi3) {
        const link2 = document.querySelector("li:nth-child(3) > a ");
        link2.setAttribute("href", "/contact");
        link2.innerText = 'kontakt';
    }
}





