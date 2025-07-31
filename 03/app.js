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

for (let key in buttonSettings.attr) {
    button[key] = buttonSettings.attr[key];

}

for (let key in buttonSettings.css) {
    button.style[key] = buttonSettings.css[key];

}

button.textContent = buttonSettings.text;

const parentElement = document.querySelector('.parent-for-button');

if (parentElement) {
    parentElement.appendChild(button)
}