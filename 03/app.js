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

const parent = document.querySelector('.parent-for-button');



if (parent) {
    const btn = document.createElement('button');   
    parent.appendChild(btn);

    for(const key in buttonSettings.attr) {
        btn.setAttribute(key, buttonSettings.attr[key])
    }
    for (const key in buttonSettings.css) {
        btn.style[key] = buttonSettings.css[key];
    }
    btn.textContent = buttonSettings.text
}