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

for(prop in buttonSettings){
    if(prop === 'attr'){
        for(key in buttonSettings[prop]){
            button.setAttributeNS('className', key, buttonSettings[prop][key]);
        }
    }
    if(prop === 'css'){
        for(key in buttonSettings[prop]){
            button.style[key] = buttonSettings[prop][key];
        }
    }
    if(prop === 'text'){
        button.innerText = buttonSettings[prop];
    }
}

const parentForButton = document.querySelector('.parent-for-button');

if(parentForButton){
    parentForButton.appendChild(button);
}