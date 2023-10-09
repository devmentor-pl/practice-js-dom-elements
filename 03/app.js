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

const buttonElement = document.createElement('button');

for (const attrKey in buttonSettings.attr) {
    buttonElement.setAttribute(attrKey, buttonSettings.attr[attrKey]);
}

for (const cssKey in buttonSettings.css) {
    buttonElement.style[cssKey] = buttonSettings.css[cssKey];
}

buttonElement.textContent = buttonSettings.text;

const parentElement = document.querySelector('.parent-for-button');
parentElement.appendChild(buttonElement);

buttonElement.addEventListener('click', function() {
    alert('Przycisk został kliknięty!');
});