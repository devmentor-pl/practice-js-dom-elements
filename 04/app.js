console.log("DOM");
const nav = document.querySelector("nav");

// Rozwiązanie 1

if (nav) {
  const ul = document.createElement("ul");
  nav.appendChild(ul);

  const li = document.createElement("li");
  ul.appendChild(li);

  const a = document.createElement("a");
  li.appendChild(a);
  a.textContent = "home";
  a.setAttribute("href", "/");

  const liClone1 = li.cloneNode(false);
  ul.appendChild(liClone1);

  const aClone1 = a.cloneNode(false);
  liClone1.appendChild(aClone1);
  aClone1.textContent = "gallery";
  aClone1.setAttribute("href", "/gallery");

  const liClone2 = li.cloneNode(false);
  ul.appendChild(liClone2);

  const aClone2 = a.cloneNode(false);
  liClone2.appendChild(aClone2);

  aClone2.textContent = "contact";
  aClone2.setAttribute("href", "/contact");
}

if (nav) {
  const ul = document.createElement("ul");
  nav.appendChild(ul);

  const li = document.createElement("li");
  ul.appendChild(li);

  const a = document.createElement("a");
  li.appendChild(a);
  a.textContent = "home";
  a.setAttribute("href", "/");

  const liClone1 = li.cloneNode(false);
  ul.appendChild(liClone1);

  const aClone1 = a.cloneNode(false);
  liClone1.appendChild(aClone1);
  aClone1.textContent = "gallery";
  aClone1.setAttribute("href", "/gallery");

  const liClone2 = li.cloneNode(false);
  ul.appendChild(liClone2);

  const aClone2 = a.cloneNode(false);
  liClone2.appendChild(aClone2);

  aClone2.textContent = "contact";
  aClone2.setAttribute("href", "/contact");
}

// Rozwiązanie 2
// struktura do wykorzystania w pętli
const menuItems = [
  { text: "start", url: "/" },
  { text: "galeria", url: "/gallery" },
  { text: "kontakt", url: "/contact" },
];

const ul = document.createElement("ul");
nav.appendChild(ul);

const li = document.createElement("li");
ul.appendChild(li);

const a = document.createElement("a");
li.appendChild(a);

const liClone1 = li.cloneNode(false);
ul.appendChild(liClone1);

const aClone1 = a.cloneNode(false);
liClone1.appendChild(aClone1);

const liClone2 = li.cloneNode(false);
ul.appendChild(liClone2);

const aClone2 = a.cloneNode(false);
liClone2.appendChild(aClone2);

const Lilist = document.querySelectorAll("li");
const aList = document.querySelectorAll("a");


//console.log(menuItems[0].url)
//console.log(menuItems[0].text);

if(nav){
    aList.forEach(function (element, index) {
      element.textContent = menuItems[index].text;
      element.setAttribute("href", menuItems[index].url);
    });
}


