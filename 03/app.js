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

const button = document.createElement('button');

// Ustawianie atrybutów
for (const key in buttonSettings.attr) {  

//   button.setAttribute(key, buttonSettings.attr[key])

    const value = buttonSettings.attr[key]
    button[key] = value
}

// Ustawianie stylów
for (const key in buttonSettings.css) {
//   button.style[key] = buttonSettings.css[key];

const value = buttonSettings.css[key] 
button.style[key] = value
}

// Ustawianie tekstu
// button.textContent = buttonSettings.text
button.innerText = buttonSettings.text


// Wstawianie przycisku do elementu o klasie .parent-for-button
const parentElement = document.querySelector('.parent-for-button');
parentElement.appendChild(button);

// button.style.border = '1px solid red'
// button.innerText = 'jakiś tekst'
// button.className = 'klasa'