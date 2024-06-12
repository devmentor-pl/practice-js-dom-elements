console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const nav = document.querySelector("nav")
const ul = document.createElement("ul");

nav.appendChild(ul)

menuItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    // a.setAttribute("href", item.url);
    a.href = item.url;
    a.textContent = item.text;
    li.appendChild(a);
    ul.appendChild(li);
})






// const li1 = document.createElement("li");
// const a1= document.createElement("a");
// a1.href = "/"
// a1.textContent = "start";

// const li2 = document.createElement("li");
// const a2= document.createElement("a");
// a2.setAttribute("href", "/gallery");
// a2.textContent = "galeria";

// const li3 = document.createElement("li");
// const a3= document.createElement("a");
// a3.setAttribute("href", "/contact");
// a3.textContent = "kontakt";

// li1.appendChild(a1);
// ul.appendChild(li1);

// li2.appendChild(a2);
// ul.appendChild(li2);

// li3.appendChild(a3);
// ul.appendChild(li3);
