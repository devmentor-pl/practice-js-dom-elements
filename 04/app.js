// console.log('DOM');

// const navbar = document.querySelector("nav");

// //Tworzenie li
// const liItem1 = document.createElement("li");
// const aItem = document.createElement("a");
// aItem.setAttribute("href", "/");
// aItem.innerText = "home";
// liItem1.appendChild(aItem);

// const liItem2 = document.createElement("li");
// const aItem2 = document.createElement("a");
// aItem2.setAttribute("href", "/gallery");
// aItem2.innerText = "gallery";
// liItem2.appendChild(aItem2);

// const liItem3 = document.createElement("li");
// const aItem3 = document.createElement("a");
// aItem3.setAttribute("href", "/contact");
// aItem3.innerText = "contact";
// liItem3.appendChild(aItem3);

// // Tworzenie ul listy
// const ulList = document.createElement("ul");

// ulList.appendChild(liItem1);
// ulList.appendChild(liItem2);
// ulList.appendChild(liItem3);

// console.log(ulList);
// console.log(navbar);

// navbar.appendChild(ulList);

// ZA POMOCĄ PĘTLI

const navbar = document.querySelector("nav");

// struktura do wykorzystania w pętli
const menuItems = [
	{ text: "start", url: "/" },
	{ text: "galeria", url: "/gallery" },
	{ text: "kontakt", url: "/contact" },
];

const ulList = document.createElement("ul")

menuItems.forEach(function (item) {
	// console.log(item);
	const liItem = document.createElement("li");
	const aItem = document.createElement("a");

	for (let key in item) {
		if (key === "text") {

			// console.log("klucz:", key);
			// console.log("wartość;", item[key]);
			
			aItem.textContent = item[key];
			
		} else if (key === "url") {

			// console.log("klucz:", key);
			// console.log("wartość;", item[key]);
			
			aItem.setAttribute("href", item[key]);
		}
		
	}

	liItem.appendChild(aItem);
	ulList.appendChild(liItem)
});

navbar.appendChild(ulList)


