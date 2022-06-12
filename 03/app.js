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

const renderButton = function () {
    const button = document.createElement('button');
    for (const property in buttonSettings.attr) {
        const value = buttonSettings.attr[property];
        button[property] = value;
    };
    for (const property in buttonSettings.css) {
        const value = buttonSettings.css[property];
        button.style[property] = value;
    };
    button.innerText = buttonSettings.text;
    return button;
};

const render = function () {
    const container = document.querySelector('.parent-for-button');
    const btn = renderButton();

    container.appendChild(btn);
};

render();