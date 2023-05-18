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

for (const key in buttonSettings) {

    const properties = buttonSettings[key]

    if (key === "attr") {
        for (const item in properties) {
            button.setAttribute(item, properties[item])
        }
    } else if (key === "css") {
        for (const item in properties) {
            button.style[item] = properties[item]
        }
    } else {
        button.innerText = properties
    }
}

parent.appendChild(button)

