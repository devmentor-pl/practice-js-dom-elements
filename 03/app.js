console.log('DOM');
const parent = document.querySelector('.parent-for-button')
console.log(parent)

const newButton = document.createElement('button');
//newButton.classList.add('btn')
//newButton.style.padding = '5px', '20px'
//parent.appendChild(newButton)
 


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
const a = buttonSettings
 console.log(a)
 for(key in buttonSettings)
 {
     const o = buttonSettings[key]
     console.log(buttonSettings[key])
     //newButton.seto()
     parent.appendChild(newButton)
 }
 