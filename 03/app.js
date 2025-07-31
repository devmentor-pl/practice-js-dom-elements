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

const newBtn = document.createElement('button')
for(const key  in buttonSettings) {
        const value = buttonSettings[key]
        if(typeof value === 'object' && value !== null ) {
            if(key == 'attr') {
                for(const property in value) {
                    newBtn.setAttribute(property, value[property])
                    console.log(`${property}: ${value[property]}`)
    
                }
            }
            if(key == 'css') {
                for(const property in value) {
                    newBtn.style[property] = value[property]
                    console.log(`${property}: ${value[property]}`)
                }
            }
            
        } else {
            console.log(`${key}: ${value}`)
            newBtn.innerText = value
        }
}

const parent = document.querySelector('.parent-for-button')
console.log(parent)
parent.appendChild(newBtn)

