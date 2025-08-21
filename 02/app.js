console.log('DOM');

const linkList = document.querySelectorAll('[data-url]');

if(linkList !== null) {
    linkList.forEach(link => {
        const url = link.getAttribute('data-url');
        link.href = url;
        console.log("Gotowe url:", link.href);
    });
};