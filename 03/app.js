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

const button = document.createElement('button');
const htmlHook = document.getElementsByClassName('parent-for-button');

for(const props in buttonSettings){
    if(typeof buttonSettings[props] === 'object'){
        if(buttonSettings[props].className !== undefined) button.classList.add(buttonSettings[props].className);
        if(buttonSettings[props].title !== undefined) button.setAttribute('title', buttonSettings[props].title);
        if(buttonSettings[props].border !== undefined) button.style.border = buttonSettings[props].border;
        if(buttonSettings[props].padding !== undefined) button.style.padding = buttonSettings[props].padding;
        if(buttonSettings[props].color !== undefined) button.style.color = buttonSettings[props].color;
    }else{
        button.textContent = buttonSettings[props];
    }
}

htmlHook[0].appendChild(button);