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
const button = document.createElement('button')
parentForButton.append(button)

button.innerText = buttonSettings.text
for (const el in buttonSettings.attr) button[el] = buttonSettings.attr[el]
for (const el in buttonSettings.css) button.style[el] = buttonSettings.css[el]

