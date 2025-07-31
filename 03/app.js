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


const ourButton = document.createElement('button');


for (attributes in buttonSettings.attr) {
    ourButton[attributes] = buttonSettings.attr[attributes];
}
for (attributes2 in buttonSettings.css) {
    ourButton.style[attributes2] = buttonSettings.css[attributes2];
}
ourButton.innerText = buttonSettings.text;


console.log(ourButton);


const element = document.querySelector('.parent-for-button');
element.appendChild(ourButton);