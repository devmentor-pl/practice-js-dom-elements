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
 
const btnParent = document.querySelector('.parent-for-button');

if(btnParent) {
    const btn = document.createElement('button'); 

    if(buttonSettings.attr) {
        for(item in buttonSettings.attr) {
            btn.className = buttonSettings.attr.className;
            btn.setAttribute('title', buttonSettings.attr.title)
        } 
        for (item in buttonSettings.css) {
            btn.style.border = buttonSettings.css.border
            btn.style.padding = buttonSettings.css.padding
            btn.style.color = buttonSettings.css.color
        }
    }
    
    if (buttonSettings.text) { 
        btn.innerHTML = buttonSettings.text; 
    }

    btnParent.appendChild(btn)
    console.log(btnParent.innerHTML)
}
