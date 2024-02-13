// struktura do wykorzystania w pętli
const menuItems = [
  { text: "start", url: "/" },
  { text: "galeria", url: "/gallery" },
  { text: "kontakt", url: "/contact" },
];

const navEl = document.querySelector("nav");
if (navEl) {
  const ulEl = document.createElement("ul");
  navEl.appendChild(ulEl);
  menuItems.forEach(function (element) {
    const liEl = document.createElement("li");
    ulEl.appendChild(liEl);
    const aEl = document.createElement("a");
    liEl.appendChild(aEl);
    aEl.setAttribute("href", element.url);
    aEl.innerText = element.text;
  });
}
