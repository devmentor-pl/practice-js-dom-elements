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

for (let i = 1; i <= 3; i++) {
  const liElement = document.createElement("li");
  const linkElement = document.createElement("a");
  ulElement.appendChild(liElement);
  liElement.appendChild(linkElement);
}

const links = document.querySelectorAll("a");
console.log(links);

for (let i = 0; i <= 2; i++) {
  links[i].setAttribute("href", menuItems[i].url);
  links[i].textContent = menuItems[i].text;
}

// links[0].setAttribute("href", "/");
// links[1].setAttribute("href", "/gallery");
// links[2].setAttribute("href", "/contact");

// links[0].textContent = "start";
// links[1].textContent = "galeria";
// links[2].textContent = "kontakt";
