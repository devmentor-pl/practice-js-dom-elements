console.log('DOM');
const links = document.querySelectorAll('[data-url');

links.forEach(el => {
    const dataAttr = el.dataset.url; 
    if (dataAttr !== 'null') {
        el.href = dataAttr;
        el.addEventListener('click', (Event) => {
            Event.preventDefault();
            window.location.href = dataAttr;
        })
    }
});

/* 

ENG version: 
event.preventDefault() and window.location.href are used together to handle link 
clicks in a custom way. Instead of navigating to a new page, the code redirects 
the user to the address specified in data-url. Additionally, we check if the 
value of data-url is not 'null' to avoid attempting redirection to an incorrect 
address in the case of the last link in the list.
Checking whether dataAttr is not equal to 'null' before assigning el.href and 
adding the event listener. If the value of the data-url attribute is 'null', 
the link will function as a regular link without redirection.

PL version: 
event.preventDefault() i window.location.href Są używane w połączeniu, 
aby niestandardowo obsłużyć kliknięcie linku. Zamiast przechodzić do nowej strony, 
kod przekierowuje użytkownika na adres określony w data-url. 
Dodatkowo, sprawdzamy, czy wartość data-url nie jest 'null', aby uniknąć próby 
przekierowania na niepoprawny adres w przypadku ostatniego linku w liście. 

Sprawdzenie, czy dataAttr nie jest równy 'null' przed przypisaniem el.href i 
dodaniu nasłuchiwacza zdarzeń. Jeśli wartość atrybutu data-url wynosi 'null', 
link będzie działał jako zwykły link bez przekierowania.
*/