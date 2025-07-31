

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


// Tworzenie elementu button
const button = document.createElement('button');

// Ustawianie atrybutów
for (let key in buttonSettings.attr) {
    button[key] = buttonSettings.attr[key];
}

// Ustawianie stylów
for (let key in buttonSettings.css) {
    button.style[key] = buttonSettings.css[key];
}

// Ustawianie tekstu przycisku
button.textContent = buttonSettings.text;

// Znalezienie elementu z klasą .parent-for-button i dodanie przycisku
const parentElement = document.querySelector('.parent-for-button');
if (parentElement) {
    parentElement.appendChild(button);
} else {
    console.error('Element with class .parent-for-button not found.');
}

