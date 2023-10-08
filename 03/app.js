console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
}
//Tworzymy element typu button
const buttonElement = document.createElement('button');
//Ustawiamy atrybuty z obiektu buttonSettings
for (const attrKey in buttonSettings.attr) {
    buttonElement.setAttribute(attrKey, buttonSettings.attr[attrKey]);
}
//Ustawiamy style z obiektu buttonSettings
for (const cssKey in buttonSettings.css) {
    buttonElement.style[cssKey] = buttonSettings.css[cssKey];
}
//Ustawiamy tekst przycisku
buttonElement.textContent = buttonSettings.text;
//Pobieramy rodzica do przycisku 
const parentElement = document.querySelector('.parent-for-button');
//Dodajemy przycisk do rodzica
parentElement.appendChild(buttonElement);