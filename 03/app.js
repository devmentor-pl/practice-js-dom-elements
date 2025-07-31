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

const sectionElement = document.querySelector('.parent-for-button');
if (sectionElement) {
    const newButton = document.createElement('button');

    for(const key in buttonSettings.attr) {
        newButton.setAttribute(key, buttonSettings.attr[key])
    }

    for(const key in buttonSettings.css) {
        newButton.style[key] = buttonSettings.css[key]; 
    } 
    
    newButton.innerText  = buttonSettings.text;

    sectionElement.appendChild( newButton );
}

