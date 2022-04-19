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

const parentButton = document.querySelector('.parent-for-button');

if (parentButton) {
    const newButton = document.createElement('button');
    parentButton.appendChild(newButton);
    newButton.innerText = buttonSettings.text

    for (const attribute in buttonSettings.attr) {
        newButton.setAttribute(attribute, buttonSettings.attr[attribute])
    }

    for (const css in buttonSettings.css) {
        newButton.style[css] = buttonSettings.css[css]
    }
}
