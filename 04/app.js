console.log("DOM");

// struktura do wykorzystania w pętli
const menuItems = [
  { text: "start", url: "/" },
  { text: "galeria", url: "/gallery" },
  { text: "kontakt", url: "/contact" },
];

const menuElement = document.createElement("ul");

menuItems.forEach((item) => {
  const itemElement = document.createElement("li");

  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", item.url);
  linkElement.textContent = item.text;

  itemElement.appendChild(linkElement);
  menuElement.appendChild(itemElement);
});

const navigationElement = document.querySelector("nav");
if (navigationElement) navigationElement.appendChild(menuElement);
