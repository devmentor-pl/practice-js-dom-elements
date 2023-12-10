console.log("DOM");

// struktura do wykorzystania w pętli
const menuItems = [
	{ text: "start", url: "/" },
	{ text: "galeria", url: "/gallery" },
	{ text: "kontakt", url: "/contact" },
];

const navElement = document.querySelector('nav')

menuItems.forEach(item => {

	const liElements = document.createElement('li');
	const linkElements = document.createElement('a')

	linkElements.setAttribute('href', item.url)
	liElements.textContent = item.text

	navElement.appendChild(liElements)
	liElements.appendChild(linkElements)
})


// const navElement = document.querySelector("nav");
// const ulList = document.createElement("ul");
// navElement.appendChild(ulList);

// let liNumber = 3;
// let aNumber = 3;

// for (let i = 1; i <= liNumber && aNumber; i++) {
// 	const liElements = document.createElement("li");
// 	ulList.appendChild(liElements);
// 	const aElements = document.createElement("a");
// 	liElements.appendChild(aElements);

//     const firstItem = document.querySelector('a:first-child')
//     firstItem.textContent = 'Home'
   
//     const secondItem = ulList.querySelector('li a:nth-child(2)')

//     console.log(secondItem);
// }  //  nie wiem co robię nie tak i nie mam pomysłu na dokończenie zadania bez użycia pętli.:()

 
