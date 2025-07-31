console.log("DOM");

// struktura do wykorzystania w pętli
const menuItems = [
  { text: "start", url: "/" },
  { text: "galeria", url: "/gallery" },
  { text: "kontakt", url: "/contact" },
];

const ulEl = document.createElement("ul");
const navEl = document.querySelector("nav");
navEl.appendChild(ulEl);

// const liFirst = document.createElement("li");
// const liFirstLink = document.createElement("a");

// liFirstLink.href = "/";
// liFirstLink.innerText = "home";

// liFirst.appendChild(liFirstLink);
// ulEl.appendChild(liFirst);

// const liSecond = document.createElement("li");
// const liSecondLink = document.createElement("a");

// liSecondLink.href = "/gallery";
// liSecondLink.innerText = "gallery";

// liSecond.appendChild(liSecondLink);
// ulEl.appendChild(liSecond);

// const liThird = document.createElement("li");
// const liThirdLink = document.createElement("a");

// liThirdLink.href = "/contact";
// liThirdLink.innerText = "contact";

// liThird.appendChild(liThirdLink);
// ulEl.appendChild(liThird);

menuItems.forEach(function (el) {
  const liEl = document.createElement("li");
  const linkEl = document.createElement("a");
  linkEl.innerText = el.text;
  linkEl.href = el.url;

  liEl.appendChild(linkEl);
  ulEl.appendChild(liEl);
});
