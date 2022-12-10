const button = document.createElement('button');
const parentForButton = document.querySelector('.parent-for-button');
parentForButton.appendChild(button);

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

for(let key in buttonSettings.attr){
    button.getAttribute(key)
}
for(let key in buttonSettings.css) {
    button.setAttribute(key, buttonSettings.css)
}
//nie wiem jak dokończyć poprawnie pętle for in... 