const dataUrlList = document.querySelectorAll('[data-url]');

if (dataUrlList) { //chyba nie potrzebne tutaj?
    dataUrlList.forEach(function (element) {
        const link = element.getAttribute('data-url');
        element.setAttribute('href', link);
    })
}