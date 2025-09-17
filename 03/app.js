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

const btn = document.createElement('button');


for (let key in buttonSettings.attr) {
    btn[key] = buttonSettings.attr[key];
}

for (let key in buttonSettings.css) {
    btn.style[key] = buttonSettings.css[key];
}

btn.innerText = buttonSettings.text;

document.querySelector('.parent-for-button').appendChild(btn);