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

const parentForButton = document.querySelector('.parent-for-button');

const newButton = document.createElement('button');


for (const key in buttonSettings) {
    if (key === 'attr') {

        for (const key in buttonSettings.attr) {
            newButton.setAttribute(key, buttonSettings.attr[key]);
        }
    }

    if (key === 'css') {

        for (const key in buttonSettings.css) {
            newButton.style[key] = buttonSettings.css[key];
        }
    }

    if (key === 'text') {
        newButton.innerText = buttonSettings[key];
    }

}

parentForButton.appendChild(newButton);

console.log(newButton);