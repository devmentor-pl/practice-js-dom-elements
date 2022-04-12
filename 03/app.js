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
// console.log('---- solution One ----')
// const button = document.createElement('button')

// // attr
// button.className = buttonSettings.attr.className
// button.title = buttonSettings.attr.title

// // css
// objCss = buttonSettings.css
// for(let key in objCss) {
//     let css = objCss[key]
//     button.style[key] = css
// }

// // text
// button.innerText = buttonSettings.text

// // add to browser
// const section = document.querySelector('.parent-for-button')
// section.appendChild(button)


// solution Two
// ==============================
console.log('---- solution Two ----')
const button = document.createElement('button')
for(let key in buttonSettings) {
    // console.log(key)
    // console.log(buttonSettings[key])
    if(key === 'attr') {
        button.className = buttonSettings[key].className
        button.title = buttonSettings[key].title
    }
    if(key === 'css') {
        button.style.border = buttonSettings[key].border
        button.style.padding = buttonSettings[key].padding
        button.style.color = buttonSettings[key].color
    }
    button.innerText = buttonSettings[key]
}

const section = document.querySelector('.parent-for-button')
section.appendChild(button)
















