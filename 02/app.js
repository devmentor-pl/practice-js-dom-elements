document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[data-url]');

    links.forEach(link => {
        const url = link.getAttribute('data-url');

        if (url !== 'null') {
            link.setAttribute('href', url);
        } else {
            link.style.color = 'grey';  
            link.addEventListener('click', function (event) {
                event.preventDefault();  
            });
        }
    });
});
