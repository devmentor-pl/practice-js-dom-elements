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


for (prop in buttonSettings.attr){
btn.className = buttonSettings.attr.className;
btn.setAttribute('title', buttonSettings); 
}

for (prop in buttonSettings.css) {
btn.style.border = buttonSettings.css.border;
btn.style.padding = buttonSettings.css.padding;
btn.style.color = buttonSettings.css.color;
}

btn.innerText = buttonSettings.text;

classElement.appendChild(btn);
}