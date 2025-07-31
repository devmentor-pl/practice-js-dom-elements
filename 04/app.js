console.log("DOM");

const navElement = document.querySelector("nav");

// const ulElement = document.createElement("ul");
// const liElement1 = document.createElement("li");
// const liElement2 = document.createElement("li");
// const liElement3 = document.createElement("li");
// const aElement1 = document.createElement("a");
// const aElement2 = document.createElement("a");
// const aElement3 = document.createElement("a");

// navElement.appendChild(ulElement);
// ulElement.appendChild(liElement2);
// ulElement.appendChild(liElement3);
// ulElement.appendChild(liElement1);
// liElement1.appendChild(aElement1);
// liElement2.appendChild(aElement2);
// liElement3.appendChild(aElement3);

// aElement1.innerText = "start";
// aElement1.setAttribute("href", "/");

// aElement2.innerText = "galeria";
// aElement2.setAttribute("href", "/gallery");

// aElement3.innerText = "kontakt";
// aElement3.setAttribute("href", "/contact");

// struktura do wykorzystania w pętli
const menuItems = [
    { text: "start", url: "/" },
    { text: "galeria", url: "/gallery" },
    { text: "kontakt", url: "/contact" },
];

const ulElement = document.querySelector("nav");

menuItems.forEach(function (item) {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");

    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);

    aElement.innerText = item.text;
    aElement.href = item.url;
});
