console.log('DOM');

const linkEl = document.querySelectorAll ("[data-url]");


if(linkEl) {
    linkEl.forEach((element) => {
        element.setAttribute('href', element.getAttribute ('data-url'));
    })
}

