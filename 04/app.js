// struktura do wykorzystania w pętli
const menuItems = [
  { text: "start", url: "/" },
  { text: "galeria", url: "/gallery" },
  { text: "kontakt", url: "/contact" },
];

const nav = document.querySelector("nav");
const ul = document.createElement("ul");

nav.appendChild(ul);

menuItems.forEach((element) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = element.url;
  a.textContent = element.text;

  li.appendChild(a);
  ul.appendChild(li);
});

// nav.appendChild(ul).appendChild(li).appendChild(a);

// a.setAttribute("href", "/");
// a.innerText = "start";

// const li1 = li.cloneNode(true);
// const a1 = li1.querySelector("a");
// a1.innerText = "galeria";
// a1.href = "/gallery";

// ul.appendChild(li1);

// const li2 = li.cloneNode(true);
// const a2 = li2.querySelector("a");
// a2.innerText = "kontakt";
// a2.href = "/contact";

// ul.appendChild(li2);
