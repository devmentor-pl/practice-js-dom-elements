console.log('DOM');

const links = document.querySelectorAll('[data-url]');

console.log(links);

links.forEach(link => {
    let linkUrl = link.dataset.url;
    link.href = linkUrl;
    console.log(link);
})

