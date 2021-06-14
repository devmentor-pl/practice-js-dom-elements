const button = document.createElement('button');
const parrentForButton = document.querySelector('.parent-for-button');
parrentForButton.appendChild(button);


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

for (const key in buttonSettings.attr) {
    button.setAttribute(key, buttonSettings.attr[key]);
}

for (const key in buttonSettings.css) {
    button.style.setProperty(key, buttonSettings.css[key])
}

button.innerHTML = buttonSettings.text;
