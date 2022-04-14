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

const parentForButton = document.querySelector('.parent-for-button')
const newButton = document.createElement('button')
parentForButton.appendChild(newButton)

const attributes = buttonSettings.attr
for(let attr in attributes) {
    newButton.setAttribute(attr, attributes[attr])
}

const styles = buttonSettings.css
for(let property in styles) {
    newButton.style.setProperty(property, styles[property])
}

newButton.innerText = buttonSettings.text