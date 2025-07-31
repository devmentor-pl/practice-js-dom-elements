console.log("DOM");
const links = document.querySelectorAll(`a[data-url]`);
for (let i = 0; i < links.length; i++) {
    const url = links[i].getAttribute("data-url");
    links[i].setAttribute("href", url);
}
