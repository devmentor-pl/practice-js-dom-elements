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

const buttonParent = document.querySelector('.parent-for-button');
const newBtn = document.createElement('button');
for(const key in buttonSettings) {
    console.log(buttonSettings[key]);
    switch(key) {
        case 'attr':
            newBtn.classList.add(buttonSettings[key].className);
            newBtn.title = buttonSettings[key].title;
            break;
        case 'css':
            newBtn.style.border = buttonSettings[key].border;
            newBtn.style.padding = buttonSettings[key].padding;
            newBtn.style.color = buttonSettings[key].color;
            break;
        case 'text':
            newBtn.textContent = buttonSettings[key];

    }
    
}
buttonParent.appendChild(newBtn);
