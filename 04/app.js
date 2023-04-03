console.log("DOM");

// struktura do wykorzystania w pętli
const menuItems = [
  { text: "start", url: "/" },
  { text: "galeria", url: "/gallery" },
  { text: "kontakt", url: "/contact" },
];

const nav = document.querySelector("nav");
const ul = document.createElement("ul");
nav.appendChild(ul);
for (item in menuItems) {
  // console.log(menuItems[item]);
  const li = document.createElement("li");
  ul.appendChild(li);
  const a = document.createElement("a");
  li.appendChild(a);
  for (attr in menuItems[item]) {
    // console.log(attr); text url
    // console.log(menuItems[item][attr]); start /
    if (attr === "text") {
      a.textContent = menuItems[item][attr];
    }
    a.setAttribute(attr, menuItems[item][attr]);
  }
}
