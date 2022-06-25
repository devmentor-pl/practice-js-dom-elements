console.log("DOM");

const navElement = document.querySelector("nav");
const ulElement = document.createElement("ul");
navElement.appendChild(ulElement);

// struktura do wykorzystania w pętli
const menuItems = [
	{ text: "start", url: "/" },
	{ text: "galeria", url: "/gallery" },
	{ text: "kontakt", url: "/contact" },
];

menuItems.forEach((element) => {
	const liElement = document.createElement("li");
	ulElement.appendChild(liElement);
	const aElement = document.createElement("a");
	liElement.appendChild(aElement);
	aElement.href = element.url;
	aElement.textContent = element.text;
});
