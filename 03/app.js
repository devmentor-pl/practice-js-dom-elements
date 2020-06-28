console.log('DOM');

let createButton = document.querySelector('.parent-for-button')
console.log(createButton)


let newBtn = document.createElement('button');


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

for (let key in buttonSettings) {
    if (key === 'css') {
        newBtn.style.border = buttonSettings.css.border;
        newBtn.style.padding = buttonSettings.css.padding;
        newBtn.style.color = buttonSettings.css.color;
    }
    if (key === 'attr') {
        newBtn.style.className = buttonSettings.attr.className;
        newBtn.style.title = buttonSettings.attr.title;

    }
    if (key === 'text') {
        newBtn.innerText = buttonSettings.text;
    }
}


createButton.appendChild(newBtn)