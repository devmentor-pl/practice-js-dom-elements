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

const sectionHtml = document.querySelector('.parent-for-button');


if(sectionHtml) {
    const button = document.createElement('button');
    
    //Add attribute. 
    for(const property in buttonSettings.attr) {
        property === 'className' ? button.setAttribute('class', buttonSettings.attr[property]) : button.setAttribute(property, buttonSettings.attr[property]);
        }

    // Add class
    for(const property in buttonSettings.css) {
        button.style[property] = buttonSettings.css[property];
    }


    button.textContent = buttonSettings.text;
    sectionHtml.appendChild(button);
}
