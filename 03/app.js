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
    textContent: 'Click me!'
};

const applySettings = (element, settings) => {
    for (const [key, value] of Object.entries(settings)) {
        if (key === 'attr') {
            for (const [attr, attrValue] of Object.entries(value)) {
                element[attr] = attrValue
            }
        } else if (key === 'css') {
            for (const [prop, propValue] of Object.entries(value)) {
                element.style[prop] = propValue;
            }
        } else {
            element[key] = value;
        }
    }
};

const button = document.createElement('button');
applySettings(button, buttonSettings);
const buttonParent = document.querySelector('.parent-for-button');
buttonParent.appendChild(button);