console.log('DOM');

const btn = document.createElement('button');
const parrentForBtn = document.querySelector('.parent-for-button');
parrentForBtn.appendChild(btn);


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

if (btn) {
    for (const key in buttonSettings.attr) {
        btn.setAttribute(key, buttonSettings.attr[key]);
    }
    for (const key in buttonSettings.css) {
        btn.setAttribute(key, buttonSettings.css[key]);
    }
}

btn.innerHTML = buttonSettings.text;