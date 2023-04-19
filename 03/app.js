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

const parentButton = document.querySelector('.parent-for-button')
const newButton = document.createElement('button')
if(parentButton){
    parentButton.appendChild(newButton)
}

for (const key in buttonSettings.attr) {
    const value = buttonSettings.attr[key]
    newButton[key] = value
}

for (const key in buttonSettings.css) {
    const value = buttonSettings.css[key]
    newButton.style[key] = value
}

newButton.innerText = buttonSettings.text


// newButton.title = buttonSettings.attr.className
// newButton.className = buttonSettings.attr.className
// newButton.classList.add(buttonSettings.attr.className)
// newButton.innerText = buttonSettings.text
// newButton.style.border = buttonSettings.css.border
// newButton.style.padding = buttonSettings.css.padding
// newButton.style.color = buttonSettings.css.color
// const btnAttr = buttonSettings.attr.title
// newButton.getAttribute(btnAttr)
// newButton.setAttribute('title', btnAttr)