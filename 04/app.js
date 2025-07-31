console.log("DOM");

// struktura do wykorzystania w pętli
const menuItems = [
	{ text: "start", url: "/" },
	{ text: "galeria", url: "/gallery" },
	{ text: "kontakt", url: "/contact" },
];
const navList = document.querySelector("nav");
const ulList = document.createElement("ul");
navList.append(ulList);

for (let i = 0; i < menuItems.length; i++) {

	const element = menuItems[i];
	console.log(element);
	
	const liList = document.createElement("li");
	const aLink = document.createElement("a");
	aLink.textContent = element.text;

	aLink.setAttribute('href', element.url)
	console.log(liList);
	liList.append(aLink)
	ulList.append(liList)


}



// const liListOne = document.createElement("li");
// const liListTwo = document.createElement("li");
// const liListThree = document.createElement("li");

// const aLinkOne = document.createElement("a");
// const alinkTwo = document.createElement("a");
// const alinkThree = document.createElement("a");

// const href = document.createElement("href");
// const hrefTwo = document.createElement("href");
// const hrefThree = document.createElement("href");




// ulList.append(liListOne, liListTwo, liListThree);

// liListOne.append(aLinkOne);
// liListTwo.append(alinkTwo);
// liListThree.append(alinkThree);

// aLinkOne.append(href);
// alinkTwo.append(hrefTwo);
// alinkThree.append(hrefThree);

// aLinkOne.setAttribute("href", "/");
// alinkTwo.setAttribute("href", "/gallery");
// alinkThree.setAttribute("href", "/contact");

// aLinkOne.textContent = "start";
// alinkTwo.textContent = "galeria";
// alinkThree.textContent = "kontakt";
