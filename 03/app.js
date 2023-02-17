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

const section = document.querySelector('.parent-for-button');
if(section) {
    const newButton = document.createElement('button');
    for (const key in buttonSettings) {
        newButton.classList.add(buttonSettings[key].className);
        if(!newButton.hasAttribute('title')) {
            newButton.setAttribute('title', buttonSettings[key].title);
        }
        newButton.style.border = buttonSettings[key].border;
        newButton.style.padding = buttonSettings[key].padding;
        newButton.style.color = buttonSettings[key].color;
        newButton.innerText = buttonSettings.text;
    }
    section.appendChild(newButton);
    }