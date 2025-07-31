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

const parentButton =document.querySelector('.parent-for-button')
const thisButton = document.createElement('button')
thisButton.innerText = 'Click me!'

// thisButton.className = 'btn'
// thisButton.setAttribute('title','super button')

// thisButton.style.border = '1px solid #336699'

for(const key in buttonSettings.attr) {
    const value = buttonSettings.attr[key]
    thisButton[key] = value
}
for(const key in buttonSettings.css) {
    const value = buttonSettings.css[key]
    thisButton.style[key] = value
}

parentButton.appendChild(thisButton)