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

const newButton = document.createElement('button');

for (key in buttonSettings.attr) {
    if(key === 'className') {
        newButton.classList.add(buttonSettings.attr[key]);
    }
    else {
        newButton.setAttribute(key, buttonSettings.attr[key]);
    }
}

for (key in buttonSettings.css) {
    switch(key){
        case 'border':
            newButton.style.border = buttonSettings.css[key];
            break;
        case 'padding':
            newButton.style.padding = buttonSettings.css[key];
            break;
        case 'color':
            newButton.style.color = buttonSettings.css[key];
            break;
        default:
            console.log('no style');
    }
}


newButton.innerText = (buttonSettings.text);



const btnParentList = document.getElementsByClassName(`parent-for-button`);
btnParentList[0].appendChild(newButton);


