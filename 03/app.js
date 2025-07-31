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
};

const button = document.createElement("button");
for (const key in buttonSettings) {
    button.setAttribute(key, buttonSettings.attr[key]);
};

for (const style in buttonSettings.css) {
    button.style[style] = buttonSettings[style];
};

button.textContent = buttonSettings.text;
const parentElement = document.querySelector(".parent-for-button");
parentElement.appendChild(button);