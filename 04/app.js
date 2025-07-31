console.log("DOM");

// const navElement = document.querySelector("nav");
// const ulElement = document.createElement("ul");
// const liElement = document.createElement("li");
// const aElement = document.createElement("a");

// if (navElement) {
//   navElement.appendChild(ulElement);
// }
// liElement.appendChild(aElement);
// ulElement.appendChild(liElement);

// aElement.innerText = "start";
// aElement.setAttribute("href", "/");

// const liElement1 = liElement.cloneNode(true);
// const aElement1 = liElement1.querySelector("a");
// aElement1.innerText = "galeria";
// aElement1.setAttribute("href", "/gallery");

// ulElement.appendChild(liElement1);

// const liElement2 = liElement.cloneNode(true);
// const aElement2 = liElement2.querySelector("a");
// aElement2.innerText = "kontakt";
// aElement2.href = "/contact";

// ulElement.appendChild(liElement2);

// struktura do wykorzystania w pętli
const menuItems = [
  { text: "start", url: "/" },
  { text: "galeria", url: "/gallery" },
  { text: "firma", url: "/firma" },
  { text: "kontakt", url: "/contact" },
];

const navElement = document.querySelector("nav");
const ulElement = document.createElement("ul");
if (navElement) {
  navElement.appendChild(ulElement);
}

menuItems.forEach(function (item) {
  const liElement = document.createElement("li");
  const aElement = document.createElement("a");

  liElement.appendChild(aElement);
  ulElement.appendChild(liElement);

  aElement.innerText = item.text;
  aElement.href = item.url;
});
