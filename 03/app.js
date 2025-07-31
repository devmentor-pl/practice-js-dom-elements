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

const newButton = document.createElement('button')
newButton.innerText = buttonSettings.text

for (const element in buttonSettings.css) {
    newButton.style[element] = buttonSettings.css[element]
}

for (const element in buttonSettings.attr) {
    newButton.setAttribute(element, buttonSettings.attr[element])
}

const parentElement = document.querySelector('.parent-for-button')
parentElement.appendChild(newButton)