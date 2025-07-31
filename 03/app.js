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

const button = document.createElement('button')
const parent = document.querySelector(".parent-for-button")

if (parent) {
    for (const item in buttonSettings.attr) {
        button.setAttribute(item, buttonSettings.attr[item])
    }
    for (const item in buttonSettings.css) {
        button.style[item] = buttonSettings.css[item]
    }
    button.innerText = buttonSettings.text

    parent.appendChild(button)
}


