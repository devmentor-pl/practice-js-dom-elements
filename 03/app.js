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

if(buttonParent) {
    const btnEl = document.createElement('button');
    buttonParent.appendChild(btnEl);
    for(keys in buttonSettings) {
        const value = buttonSettings[keys];
        if(keys === 'text') {
            btnEl.textContent = value;
        }
        for(keys in value) {
            if(keys === 'className') {
                btnEl.classList.add(value[keys]);
            }
            else if(keys === 'title') {
                btnEl.setAttribute('title', value[keys]);
            }
            else if(keys === 'border') {
                btnEl.style.border = value[keys];
            }
            else if(keys === 'padding') {
                btnEl.style.padding = value[keys];
            }
            else if(keys === 'color') {
                btnEl.style.color = value[keys];
            }
        }

    }
}