console.log('DOM');
const section = document.querySelector('section');

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




const appendStyledButton = function (btn) {
    buttonAttr(btn);
    buttonStyles(btn);
    buttonText(btn);
    section.appendChild(btn);
}


const buttonAttr = function (btn) {
    for (const property in buttonSettings['attr']) {
        if (property === 'className') {
            btn.setAttribute('class', buttonSettings['attr'][property]);
        } else {
            btn.setAttribute('data-' + property, buttonSettings['attr'][property])
        }
    }
}

const buttonStyles = function (btn) {
    for (const property in buttonSettings['css']) {
        btn.style.setProperty(property, buttonSettings['css'][property])
    }
}

const buttonText = function (btn) {
    for (const property in buttonSettings['text']) {
        btn.textContent = buttonSettings['text'];
    }
}

const newButton = document.createElement('button');
appendStyledButton(newButton);