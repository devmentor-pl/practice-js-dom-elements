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

for(const key in buttonSettings.attr) {
    buttonElement.setAttribute(key, buttonSettings.attr[key]);
};

for(const key in buttonSettings.css) {
    buttonElement.style[key] = buttonSettings.css[key];
}

buttonElement.textContent = buttonSettings.text;

const sectionElement = document.querySelector('.parent-for-button');
if(sectionElement) {
    sectionElement.appendChild(buttonElement);
}