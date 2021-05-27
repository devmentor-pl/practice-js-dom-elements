console.log('DOM');
const parent = document.querySelector('.parent-for-button');
const btn = document.createElement('button');
parent.appendChild(btn);

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

for(const main in buttonSettings) {
    if(main === 'attr') {
        for(const key in buttonSettings[main]) {
            btn.setAttribute(key, buttonSettings[main][key]);
            console.log(buttonSettings[main][key]);
        }
    }
    if(main === 'css') {
        for(const key in buttonSettings[main]) {
            btn.style[key] = buttonSettings[main][key];
            console.log(buttonSettings[main][key]);
        }
    }
    btn.textContent = buttonSettings.text;
}