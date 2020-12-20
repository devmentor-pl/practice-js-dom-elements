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

const newButton = document.createElement('button');


for (const key in buttonSettings) {
    if (key === 'attr') {
        {
            newButton.setAttribute('class', buttonSettings[key].className);
            newButton.setAttribute('title', buttonSettings[key].title);
        }

    }
    if (key === 'css') {
        {
            newButton.style.border = buttonSettings[key].border;
            newButton.style.padding = buttonSettings[key].padding;
            newButton.style.color = buttonSettings[key].color;
        }

    }
    if (key === 'text') {
        newButton.innerText = buttonSettings[key];
    }

}

parentForButton.appendChild(newButton);

console.log(newButton);