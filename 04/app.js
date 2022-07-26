console.log("DOM");

// struktura do wykorzystania w pętli
const menuItems = [
  { text: "start", url: "/" },
  { text: "galeria", url: "/gallery" },
  { text: "kontakt", url: "/contact" },
];
// let navEl = document.querySelector("nav");
// if (navEl) {
//   const ulEl = document.createElement("ul");
//   navEl.appendChild(ulEl);

//   for (let i = 0; i < 3; i++) {
//     const liEl = document.createElement("li");
//     ulEl.appendChild(liEl);
//     const aEl = document.createElement("a");
//     liEl.appendChild(aEl);
//     aEl.setAttribute("href", "/");
//   }
//   const aFirst = ulEl.firstElementChild.firstElementChild;
//   aFirst.innerHTML = "home";
//   const aSecond = ulEl.firstElementChild.nextElementSibling.firstElementChild;
//   aSecond.setAttribute("href", "/gallery");
//   aSecond.innerHTML = "gallery";
//   const aThird = ulEl.lastElementChild.firstElementChild;
//   aThird.setAttribute("href", "/contact");
//   aThird.innerHTML = "contact";
// }

let navEl = document.querySelector("nav");
if (navEl) {
  const ulEl = document.createElement("ul");
  navEl.appendChild(ulEl);

  for (let i = 0; i < menuItems.length; i++) {
    const liEl = document.createElement("li");
    ulEl.appendChild(liEl);
    const aEl = document.createElement("a");
    liEl.appendChild(aEl);
    aEl.setAttribute("href", menuItems[i].url);
    aEl.innerText = menuItems[i].text;
  }
}

// let navEl = document.querySelector("nav");
// if (navEl) {
//   const ulEl = document.createElement("ul");
//   navEl.appendChild(ulEl);

//   menuItems.forEach(function (value) {
//     const liEl = document.createElement("li");
//     ulEl.appendChild(liEl);
//     const aEl = document.createElement("a");
//     liEl.appendChild(aEl);
//     aEl.setAttribute("href", value.url);
//     aEl.innerHTML = value.text;
//   });
// }
