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

// dodanie atrybutów 

for (const attrButton in buttonSettings.attr) {
    button.setAttribute(attrButton, buttonSettings.attr[attrButton])
}

// style CSS    
for (const cssButton in buttonSettings.css) {
    button.style[cssButton] = buttonSettings.css[cssButton] 
}

// dodanie tekstu

button.textContent = buttonSettings.text

const parentForButton = document.querySelector('.parent-for-button');

parentForButton.appendChild(button);

button.addEventListener('click', console.log("działa"))