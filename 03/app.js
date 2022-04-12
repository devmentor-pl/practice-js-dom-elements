console.log('ZAD-3');

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

// solution One
// ==============================
console.log('---- solution One ----')
const button = document.createElement('button')

// attr
button.className = buttonSettings.attr.className
button.title = buttonSettings.attr.title

// css
objCss = buttonSettings.css
for(let key in objCss) {
    let css = objCss[key]
    button.style[key] = css
}

// text
button.innerText = buttonSettings.text

// add to browser
const section = document.querySelector('.parent-for-button')
section.appendChild(button)


// solution Two
// ==============================
// console.log('---- solution Two ----')

















