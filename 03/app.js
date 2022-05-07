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

const button = document.createElement('button');
console.log(button.innerHTML)

for (const group in buttonSettings){
    if(typeof buttonSettings[group] === 'object'){
        for (const value in buttonSettings[group]){
            // console.log(group)
            // console.log(value)
            // console.log(buttonSettings[group][value])
            if(group === 'attr'){
                button.setAttribute(value, buttonSettings[group][value])
            }else if(group ==='css'){
                button.style[value] = buttonSettings[group][value]
            }
        }
    } else {
        button.innerText = buttonSettings[group];
    } 
}


const sectionButton = document.querySelector('.parent-for-button')
if(sectionButton){
    sectionButton.appendChild(button)
}