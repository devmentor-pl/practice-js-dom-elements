console.log('DOM');

const classElement = document.querySelector ('.parent-for-button');
if(classElement) {
    const btn = document.createElement( 'button');

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
    
    for (let newObject in buttonSettings) {
        
        if (newObject === 'attr') {
            btn.className = buttonSettings.attr.className;
            btn.title = buttonSettings.attr.title;
    
        }
        if (newObject === 'css') {
            btn.border = buttonSettings.css.border;
            btn.padding = buttonSettings.css.padding;
            btn.color = buttonSettings.css.color;
        }
        if (newObject === 'text') {
            btn.innerText = buttonSettings.text;
        }
    }
    
    
    classElement.appendChild(btn);
    console.log(classElement, buttonSettings);
}