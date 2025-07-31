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

const btnParent = document.querySelector('.parent-for-button');

const btn = document.createElement('button');

for (const key in buttonSettings) {
        const element = buttonSettings[key];
        if (key === 'attr') {
            for (const attr in element) {
                btn[attr] = element[attr];
            }
        } else if (key === 'css') {
            for (const css in element) {
                btn.style[css] = element[css];
            }
        } else {
            btn.textContent = buttonSettings[key];
        }   
}

btnParent.appendChild(btn)




