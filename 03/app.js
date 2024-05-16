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

const parentForButton = document.getElementsByClassName('parent-for-button');
const newButton = document.createElement('button');

const addedButton = parentForButton[0].appendChild(newButton);

addedButton.classList.add(buttonSettings['attr']['className']);
addedButton.setAttribute(Object.keys(buttonSettings['attr'])[1], 'super button')
addedButton.style.setProperty('border', buttonSettings['css']['border']);
addedButton.style.setProperty('padding', buttonSettings['css']['padding']);
addedButton.style.setProperty('color', buttonSettings['css']['color']);

addedButton.textContent = buttonSettings['text'];

console.log(addedButton);