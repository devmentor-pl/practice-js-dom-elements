console.log("DOM");

// struktura do wykorzystania w pętli
const menuItems = [
  { text: "start", url: "/" },
  { text: "galeria", url: "/gallery" },
  { text: "kontakt", url: "/contact" },
];

const nav = document.querySelector("nav");

const list = document.createElement("ul");
nav.appendChild(list);

//wersja z forEach
menuItems.forEach(function (el) {
  const listItem = document.createElement("li");
  list.appendChild(listItem);
  const link = document.createElement("a");
  link.textContent = el.text;
  link.setAttribute("href", el.url);
  listItem.appendChild(link);
});

// wersja bez forEach
// const startParent = document.createElement("li");
// list.appendChild(startParent);
// const startLink = document.createElement("a");
// startLink.setAttribute("href", "/");
// startLink.textContent = "start";
// startParent.appendChild(startLink);

// const galleryParent = document.createElement("li");
// list.appendChild(galleryParent);
// const galleryLink = document.createElement("a");
// galleryLink.setAttribute("href", "/gallery");
// galleryLink.textContent = "galeria";
// galleryParent.appendChild(galleryLink);

// const contactParent = document.createElement("li");
// list.appendChild(contactParent);
// const contactLink = document.createElement("a");
// contactLink.setAttribute("href", "/contact");
// contactLink.textContent = "kontakt";
// contactParent.appendChild(contactLink);
