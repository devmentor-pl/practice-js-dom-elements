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

const parent = document.querySelector('.parent-for-button')

if (parent) {
    const createButton = document.createElement('button')
    
    createButton.classList.add(buttonSettings.attr.className)
    createButton.setAttribute('title',buttonSettings.attr.title )
    createButton.innerText = buttonSettings.text;
    for (const key in buttonSettings.css) {
        createButton.style[key] = buttonSettings.css[key];
    }

    parent.appendChild(createButton)
}

