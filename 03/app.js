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

const newButton = document.createElement('button');

for (const key in buttonSettings.attr) {
    newButton.setAttribute(key, buttonSettings.attr[key]);
}

for (const property in buttonSettings.css) {
    newButton.style[property] = buttonSettings.css[property];
}

newButton.textContent = buttonSettings.text;

const sectionForButton = document.querySelector('.parent-for-button');

sectionForButton.appendChild(newButton);