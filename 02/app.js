console.log('DOM');

const links = document.querySelectorAll("[data-url]");
links.forEach(link => {
    const url = link.getAttribute("data-url");
    link.href = url;
});