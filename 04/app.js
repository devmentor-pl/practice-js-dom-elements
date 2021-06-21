console.log("DOM");

// struktura do wykorzystania w pętli
const menuItems = [
  { text: "start", url: "/" },
  { text: "galeria", url: "/gallery" },
  { text: "kontakt", url: "/contact" },
];

/* Bez petli .forEach

const nav = document.getElementsByTagName("nav");
console.log(nav);
const ul = document.createElement("ul");
nav[0].appendChild(ul);

console.log(ul);
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  ul.appendChild(li);
  li.appendChild(a);
  a.setAttribute("href", "");
}

const a = document.querySelectorAll("a[href]");
console.log(a);
a[0].href = "/";
a[0].innerHTML = "start";
a[1].href = "/gallery";
a[1].innerHTML = "galeria";
a[2].href = "/contact";
a[2].innerHTML = "kontakt";
console.log(a[0]);
*/

// z petla .forEach

const nav = document.getElementsByTagName("nav");
//console.log(nav);
const ul = document.createElement("ul");
nav[0].appendChild(ul);

//console.log(ul);
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  ul.appendChild(li);
  li.appendChild(a);
}

const a = Array.from(document.getElementsByTagName("a"));
console.log(a);
//console.log(menuItems[0].text);
a.forEach(function (link, i) {
  a[i].innerHTML = menuItems[i].text;
  a[i].setAttribute("href", menuItems[i].url);
});

console.log(ul);
