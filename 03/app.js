console.log('DOM');

const buttonSettings = {
    attr: {
        class: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
}
const buttonParent = document.querySelector('.parent-for-button')
const newButton = document.createElement('button')
buttonParent.appendChild(newButton)

const attributes = buttonSettings.attr
const styles = buttonSettings.css

for (let attr in attributes)
    newButton.setAttribute(attr, attributes[attr])
for (let style in styles)
    newButton.style.setProperty(style, styles[style])
newButton.textContent = buttonSettings.text

// Alternatywne rozwiązanie:

// for (let set in buttonSettings) {
//     const settings = buttonSettings[set]
//     switch (set) {
//         case 'attr':
//             for (let attr in settings)
//             newButton.setAttribute(attr, settings[attr])
//         break
//         case 'css':
//             for (let css in settings)
//             newButton.style.setProperty(css, settings[css])
//         break
//         case 'text':
//             newButton.textContent = buttonSettings.text
//         break
//     }
// }