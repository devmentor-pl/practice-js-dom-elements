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

for (const attr in buttonSettings.attr) {
    button[attr] = buttonSettings.attr[attr];
}
for (const style in buttonSettings.css) {
    button.style[style] = buttonSettings.css[style];
}

button.textContent = buttonSettings.text;

const parentButton = document.querySelector('.parent-for-button');
if (parentButton) {
    parentButton.appendChild(button);
}