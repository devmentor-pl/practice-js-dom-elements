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

let newButton = document.createElement('button');

for (let attributeName in buttonSettings.attr) {
    newButton.setAttribute(attributeName, buttonSettings.attr[attributeName]);
}

for (let style in buttonSettings.css) {
    newButton.setAttribute(style, buttonSettings.css[style]);
}

newButton.textContent = buttonSettings.text;

let buttonClass = document.querySelector('.parent-for-button');
buttonClass.appendChild(newButton);