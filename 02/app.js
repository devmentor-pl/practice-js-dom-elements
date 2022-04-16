console.log('DOM');

const allLinks = document.querySelectorAll("a[data-url]");

[...allLinks].forEach(link => {

    let dataUrlAtt = link.getAttribute("data-url")
    link.setAttribute("href", dataUrlAtt)
})
