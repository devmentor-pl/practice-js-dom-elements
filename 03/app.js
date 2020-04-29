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
 for(key in buttonSettings)
 {
     if(key === 'attr'){
     newButton.classList.add(buttonSettings.attr.className)
     newButton.title= buttonSettings.attr.title
     //console.log('jest')
    }
     if(key === 'css')
     {
         newButton.style.border = buttonSettings.css.border
         newButton.style.padding = buttonSettings.css.padding
         newButton.style.backgroundColor = buttonSettings.css.color
     }
     if(key === 'text')
     newButton.innerHTML = buttonSettings.text
     //console.log('je')
 }
 parent.appendChild(newButton)