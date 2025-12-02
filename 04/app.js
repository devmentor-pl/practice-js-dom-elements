console.log("DOM");

// struktura do wykorzystania w pętli
const menuItems = [
  { text: "start", url: "/" },
  { text: "galeria", url: "/gallery" },
  { text: "kontakt", url: "/contact" },
];

const ulElement = document.createElement("ul");
const navElement = document.querySelector("nav");
navElement.appendChild(ulElement);

// Rozwiązanie bez tablicy
for (let i = 0; i < 3; i++) {
  const newLiElement = document.createElement("li");
  const newLinkElement = document.createElement("a");
  ulElement.appendChild(newLiElement);
  newLiElement.appendChild(newLinkElement);
  if (i === 0) {
    const firstTextNode = document.createTextNode("start");
    newLinkElement.appendChild(firstTextNode);
    newLinkElement.setAttribute("href", "/");
  } else if (i === 1) {
    const secondTextNode = document.createTextNode("galeria");
    newLinkElement.appendChild(secondTextNode);
    newLinkElement.setAttribute("href", "/gallery");
  } else if (i === 2) {
    const thirdTextNode = document.createTextNode("kontakt");
    newLinkElement.appendChild(thirdTextNode);
    newLinkElement.setAttribute("href", "/contact");
  }
}

// Rozwiązanie z tablicą

menuItems.forEach(function (obj) {
  const newLiElement = document.createElement("li");
  const newLinkElement = document.createElement("a");
  ulElement.appendChild(newLiElement);
  newLiElement.appendChild(newLinkElement);
  newLinkElement.append(obj.text);
  newLinkElement.setAttribute("href", obj.url);
});
