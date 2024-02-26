console.log('DOM');

const linkList = document.querySelectorAll('a');
console.log(linkList);


//pobierz zawartość atrybutu do zmiennej
const linkListWithAttribute = linkList.getAttribute('data-url');
    console.log(linkListWithAttribute); //nie działa

