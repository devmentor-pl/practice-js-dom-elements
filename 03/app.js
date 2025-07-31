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

const buttonElement = document.createElement('button')


for(const buttonKey in buttonSettings.attr){
    buttonElement[buttonKey] = buttonSettings[buttonKey]
}


for(buttonKeyStyle in buttonSettings.css) {
    buttonElement.style[buttonKeyStyle] = buttonSettings[buttonKeyStyle]
}


buttonElement.textContent = buttonSettings.text

const parentElement = document.querySelector('.parent-for-button')

parentElement.appendChild(buttonElement)