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

const buttonParent = document.querySelector('.parent-for-button');;
const button = document.createElement('button');
buttonParent.appendChild(button);
// const propName = 'title';
// button[propName] = 'tytuł: 1px solid red';


for (const property in buttonSettings) {

    // console.log(property, buttonSettings[property]);

    if(property === 'attr') {
        const obj = buttonSettings[property];

        for (const key in obj) {    
            button[key] = obj[key]
        }    
    } else if (property === 'css') {
        const obj = buttonSettings[property];

        for (const key in obj) {    
            button.style[key] = obj[key]
        } 
    } else if(property === 'text') {
        button.innerText = buttonSettings[property];
    }
}

console.log(button);