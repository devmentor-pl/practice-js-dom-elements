console.log("DOM");

// struktura do wykorzystania w pętli
const menuItems = [
	{ text: "start", url: "/" },
	{ text: "galeria", url: "/gallery" },
	{ text: "kontakt", url: "/contact" },
];

const navElement = document.querySelector("nav");
const ulWrapper = document.createElement("ul");

navElement.appendChild(ulWrapper);

for (let i = 0; i < menuItems.length; i++) {
	liElement = document.createElement("li");
	linkEl = document.createElement("a");
	ulWrapper.appendChild(liElement);
	liElement.appendChild(linkEl);
}

const linksList = ulWrapper.querySelectorAll("a");

// console.log(linksList);

linksList.forEach(function (item, index) {
	item.setAttribute("href", menuItems[index]["url"]);
	item.innerText = menuItems[index]["text"];
});

// wersja be z pętli

// const navElement = document.querySelector("nav");
// const ulWrapper = document.createElement("ul");
// const liFirstElement = document.createElement("li");
// const linkFirst = document.createElement("a");
// const liSecondElement = document.createElement("li");
// const linkSecond = document.createElement("a");
// const liThirdElement = document.createElement("li");
// const linkThird = document.createElement("a");

// navElement.appendChild(ulWrapper);
// ulWrapper.appendChild(liFirstElement);
// liFirstElement.appendChild(linkFirst);
// linkFirst.setAttribute("href", "/");
// linkFirst.innerText = "start";

// ulWrapper.appendChild(liSecondElement);
// liSecondElement.appendChild(linkSecond);
// linkSecond.setAttribute("href", "gallery");
// linkSecond.innerText = "galeria";

// ulWrapper.appendChild(liThirdElement);
// liThirdElement.appendChild(linkThird);
// linkThird.setAttribute("href", "contact");
// linkThird.innerText = "kontakt";
