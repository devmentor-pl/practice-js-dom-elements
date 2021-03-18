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

const parentForBtn = document.querySelector('.parent-for-button');
const btn = document.createElement('button');

for(const attribute in buttonSettings.attr){
    btn.setAttribute(attribute, buttonSettings.attr[attribute]);
    // console.log(attribute, buttonSettings.attr[attribute]);
};

for(const property in buttonSettings.css){  
    btn.style[property] = `${buttonSettings.css[property]}`;
    // console.log(property);
    // console.log(buttonSettings.css[property]);
};

for(const text in buttonSettings) {
    if(typeof buttonSettings[text] === 'string'){
        btn.textContent = buttonSettings[text];
    }
}

// btn.textContent = buttonSettings.text;

parentForBtn.appendChild(btn);
