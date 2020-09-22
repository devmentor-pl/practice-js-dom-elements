console.log("DOM");

// struktura do wykorzystania w pętli
const menuItems = [
  { text: "start", url: "/" },
  { text: "galeria", url: "/gallery" },
  { text: "kontakt", url: "/contact" },
];

const nav = document.querySelector("nav");

if (nav) {
  const ul = document.createElement("ul");

  //   ul.appendChild(createLinkItem("start", "/"));
  //   ul.appendChild(createLinkItem("galeria", "/gallery"));
  //   ul.appendChild(createLinkItem("kontakt", "/contact"));

  menuItems.forEach((item) => {
    if (item.text !== undefined && item.url !== undefined) {
      ul.appendChild(createLinkItem(item.text, item.url));
    }
  });

  nav.appendChild(ul);
}

function createLinkItem(text, url) {
  const li = document.createElement("li");
  const link = document.createElement("a");

  link.setAttribute("href", url);
  link.innerText = text;

  li.appendChild(link);

  return li;
}
