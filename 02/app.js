console.log('DOM');

const links = document.querySelectorAll("a");

for (const link of links) {
    if (link.hasAttribute("data-url")) {
        const linkUrl = link.getAttribute("data-url");
        link.setAttribute("href", linkUrl);
        console.log(link);
    }
}
