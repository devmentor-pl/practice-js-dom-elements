const nav = document.querySelector("nav");
const list = document.createElement("ul");

// if (nav) {
// 	nav.appendChild(list);
// 	list.appendChild(listItem);
// 	list.appendChild(listItem.cloneNode());
// 	list.appendChild(listItem.cloneNode());

// 	const allLi = Array.from(list.children);
// 	allLi.forEach((el) => {
// 		el.appendChild(listLink.cloneNode());
// 		el.firstChild.setAttribute("href", "/");
// 	});

// 	const nextLi = listItem.nextElementSibling;
// 	const lastLi = nextLi.nextElementSibling;

// 	nextLi.firstChild.setAttribute("href", "/gallery");
// 	lastLi.firstChild.setAttribute("href", "/contact");

// 	listItem.firstChild.innerHTML = "start";
// 	nextLi.firstChild.textContent = "gallery";
// 	lastLi.firstChild.textContent = "contact";
// }

// struktura do wykorzystania w pętli
const menuItems = [
	{ text: "start", url: "/" },
	{ text: "galeria", url: "/gallery" },
	{ text: "kontakt", url: "/contact" },
];

if (nav) {
	nav.appendChild(list);
	menuItems.forEach((element) => {
		const listItem = document.createElement("li");
		const listLink = document.createElement("a");

		listLink.setAttribute("href", element.url);
		listLink.textContent = element.text;
		
		list.appendChild(listItem);
		listItem.appendChild(listLink);
	});
}
