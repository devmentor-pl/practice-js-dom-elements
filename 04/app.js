console.log("DOM");

const nav = document.querySelector("nav");
// ul
const menu = document.createElement("ul");
nav.appendChild(menu);

// WITHOUT FOREACH

// // home element
// const homeMenuElement = document.createElement("li");
// menu.appendChild(homeMenuElement);
// // home link
// const homeLink = document.createElement("a");
// homeLink.innerText = "home";
// homeLink.setAttribute("href", "/");
// homeMenuElement.appendChild(homeLink);

// // gallery element
// const galleryMenuElement = document.createElement("li");
// menu.appendChild(galleryMenuElement);
// // home link
// const galleryLink = document.createElement("a");
// galleryLink.innerText = "galeria";
// galleryLink.setAttribute("href", "/gallery");
// galleryMenuElement.appendChild(galleryLink);

// // contact element
// const contactMenuElement = document.createElement("li");
// menu.appendChild(contactMenuElement);
// // home link
// const contactLink = document.createElement("a");
// contactLink.innerText = "kontakt";
// contactLink.setAttribute("href", "/contact");
// contactMenuElement.appendChild(contactLink);

// USING FOREACH
const menuItems = [
  { text: "start", url: "/" },
  { text: "galeria", url: "/gallery" },
  { text: "kontakt", url: "/contact" },
];

menuItems.forEach(function (item, index) {
  const menuElement = document.createElement("li");
  menu.appendChild(menuElement);
  item = document.createElement("a");
  item.innerText = menuItems[index]["text"];
  item.setAttribute("href", menuItems[index]["url"]);
  menuElement.appendChild(item);
});
