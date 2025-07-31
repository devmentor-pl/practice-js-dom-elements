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

const parentForButtonElement = document.querySelector('.parent-for-button')
const buttonElement = document.createElement('button', buttonSettings)

for (attr in buttonSettings.attr) {
    buttonElement.setAttribute(attr, buttonSettings.attr[attr])
}
for (style in buttonSettings.css) {
    buttonElement.style[style] = buttonSettings.css[style];
}
buttonElement.textContent = buttonSettings.text

parentForButtonElement.appendChild(buttonElement);