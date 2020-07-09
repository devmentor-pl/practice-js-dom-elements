console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    style: {
        border: '1px solid red',
        padding: '10px 20px',
        color: 'blue',
        background: 'yellow',
        borderRadius: '5px'
    },
    text: 'Click me!',
}



const parent = document.querySelector('section');
console.log(parent);

if (parent) {
    const newButton = document.createElement('button');

    for (const property in buttonSettings) {
        const result = buttonSettings[property];

        if (property === 'attr') {
            for (const key in result) {
                newButton[key] = result[key];
            }
        } else if (property === 'style') {
            for (const key in result) {
                newButton.style[key] = result[key];
            }
        } else {
            newButton.innerText = buttonSettings.text;
        }

        console.log(newButton);
    }
    parent.appendChild(newButton);
}