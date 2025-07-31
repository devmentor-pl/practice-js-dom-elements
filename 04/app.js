console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navElement = document.querySelector("nav");

if(navElement){
    const ulElement = document.createElement("ul");
    navElement.appendChild(ulElement);
    
    for(let i = 0; i < 3; i++) {

        const liElement = document.createElement("li");
        ulElement.appendChild(liElement);

        const linkElement = document.createElement("a");
        liElement.appendChild(linkElement);

        linkElement.setAttribute("href", menuItems[i].url);
        linkElement.innerText = menuItems[i].text;
    }
}

const navigation = document.querySelector("nav");

if(navigation) {
    const ulEl = document.createElement("ul");

    menuItems.forEach(function(element, index) {
        const liEl = document.createElement("li");
        const linkEl = document.createElement("a");

        linkEl.setAttribute("href", element.url);
        linkEl.innerText = menuItems[index]["text"];

        ulEl.appendChild(liEl);
        liEl.appendChild(linkEl);
    });

    navigation.appendChild(ulEl)
}




