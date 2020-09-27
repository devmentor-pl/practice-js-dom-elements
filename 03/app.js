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

const newButton = document.createElement('button');

for(const property in buttonSettings['attr']) {
    newButton.setAttribute(property, buttonSettings['attr'][property]);    
}

for(const property in buttonSettings['css']) {
    newButton.style[property] = buttonSettings['css'][property];  
}

newButton.innerText = buttonSettings['text'];

document.querySelector('.parent-for-button').appendChild(newButton);