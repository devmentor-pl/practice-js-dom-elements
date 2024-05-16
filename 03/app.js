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
const parentForButton = document.querySelector('.parent-for-button')
console.log(parentForButton);
if(parentForButton){
    const newButton = document.createElement('button');
    for (const key in buttonSettings) {
        if (typeof(buttonSettings[key]) === 'string') {
            newButton.innerText = buttonSettings[key];
        }
        else {
            for (const param in buttonSettings[key]) {
                if (key === 'css') {
                    newButton.style[param] = buttonSettings[key][param]
                }
                else {
                    newButton.setAttribute(param, buttonSettings[key][param]);
                }
            };
        }
    parentForButton.appendChild( newButton );
    }
}