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

const { attr, css, text } = buttonSettings
const parent = document.querySelector('.parent-for-button')
const button = document.createElement('button')

for (const key in css) {
    button.style[key] = css[key]
}

for (const key in attr) {
    button[key] = attr[key]
}

button.innerHTML = text
parent.appendChild(button)

