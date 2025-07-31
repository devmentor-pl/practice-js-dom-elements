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

button.className = buttonSettings.attr.className;
button.title = buttonSettings.attr.title;
button.innerText = buttonSettings.text;


for(let styleAtt in buttonSettings.css){
    button.style[styleAtt] = buttonSettings.css[styleAtt]
    console.log(buttonSettings.css[styleAtt])
}



const spaceForBtn = document.querySelector('.parent-for-button');
console.log(button);
spaceForBtn.appendChild(button);




