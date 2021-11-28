console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '3px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
}

const zmienna = buttonSettings

const buttonParent = document.querySelector('.parent-for-button');
const button = document.createElement('button');

if(buttonParent){
    buttonParent.appendChild(button);

    const attrArray = buttonSettings.attr;
        for (key in attrArray){
            button[key] = attrArray[key];
            }

    const styleArray = buttonSettings.css
        for(key in styleArray){
            button.style[key] = styleArray[key];
        }

    button.innerText = buttonSettings['text'];

 }

    // button.className = 'btn';
    // button.title = "super button";
    // button.style.border = '3px solid #336699';
    // button.style.padding = '5px 20px';
    // button.style.color = '#444';
    // button.innerHTML = 'Click ME!';