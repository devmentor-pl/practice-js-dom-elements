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

	linkElements.href = item.url
	linkElements.textContent = item.text

	liElements.appendChild(linkElements)
	navElement.appendChild(liElements)
})

