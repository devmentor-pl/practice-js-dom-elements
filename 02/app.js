console.log('DOM');

const links = document.querySelectorAll("a[data-url]");
// console.log(links)

links.forEach(link => link.setAttribute("href", link.getAttribute("data-url") ));