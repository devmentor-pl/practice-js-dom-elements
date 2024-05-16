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

const buttonParent = document.querySelector('.parent-for-button')
const buttonElement = document.createElement('button');
buttonParent.appendChild(buttonElement);

if (buttonParent) {

    for (const key in buttonSettings) {

        if (typeof buttonSettings[key] === 'object') {

            for (const keyAttr in buttonSettings.attr) {
                buttonElement[keyAttr] = buttonSettings.attr[keyAttr]
            }

            for (const keyCss in buttonSettings.css) {
                buttonElement.style[keyCss] = buttonSettings.css[keyCss]
            }
        }
        else {
            buttonElement.innerHTML = buttonSettings[key];
        }
    }

}

