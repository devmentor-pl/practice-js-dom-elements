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


const parentForButton = document.querySelector('.parent-for-button');
if(parentForButton) {
    const button = document.createElement('button');

    for(const propName in buttonSettings) {
        console.log(propName, buttonSettings[propName]);
        
        const propValue = buttonSettings[propName];

        if(propName === 'attr') {
            for(const attrName in propValue) {
                button[attrName] = propValue[attrName];
            }
        } else if(propName === 'css') {
            for(const styleName in propValue) {
                button.style[styleName] = propValue[styleName];

            }
        } else if(propName === 'text') {
            button.innerText = propValue;
        }
    }
    parentForButton.appendChild(button);
}


