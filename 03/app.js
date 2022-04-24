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
parentForButton.appendChild(button)


// ręcznie
// button.style.border = "1px solid #336699"
// button.style.color = "#444"
// button.style.padding = "5px 20px"


for (const key in buttonSettings.attr) {
    const value = buttonSettings.attr[key]
    button[key] = value
}

for (const key in buttonSettings.css) {
    const value = buttonSettings.css[key]
    button.style[key] = value
}

button.textContent = buttonSettings.text

