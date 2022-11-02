console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [{
        text: 'start',
        url: '/'
    },
    {
        text: 'galeria',
        url: '/gallery'
    },
    {
        text: 'kontakt',
        url: '/contact'
    },
];

const navEl = document.querySelector("nav");
const ulEl = document.createElement("ul");
navEl.appendChild(ulEl);


menuItems.forEach(function (el) {
    const text = el.text;
    const url = el.url;
    const liUlEl = document.createElement("li");
    const ulElA = document.createElement("a");
    const href = ulElA.setAttribute("href", url);
    ulElA.innerText = text;
    ulEl.appendChild(liUlEl);
    liUlEl.appendChild(ulElA)
});


// const navEl = document.querySelector("nav");

// const ulEl = document.createElement("ul");
// navEl.appendChild(ulEl);

// const liUlEl = document.createElement("li");
// liUlEl.innerHTML = "<a href='/'>start</a>"

// ulEl.appendChild(liUlEl);

// const liUlEl2 = document.createElement("li");
// liUlEl2.innerHTML = "<a href='/gallery'>galeria</a>"
// ulEl.appendChild(liUlEl2);

// const liUlEl3 = document.createElement("li");
// liUlEl3.innerHTML = "<a href='/contact'>kontakt</a>"
// ulEl.appendChild(liUlEl3);