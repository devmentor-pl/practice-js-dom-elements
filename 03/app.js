

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

const newButton  = document.createElement('button');


for (settingName in buttonSettings) {
    typeOfSetting = buttonSettings[settingName];
    //atributes + styles
    if(typeof typeOfSetting==='object'){
        //attributes
        if (settingName==='attr') {
            for (property in typeOfSetting) {
                newButton[property]= `${typeOfSetting[property]}`;
            }
        }
        //styles
        for (property in typeOfSetting) {
            newButton.style[property]= `${typeOfSetting[property]}`;
        }
    //text
    } else {
        newButton.innerText = typeOfSetting;
    }
}

const parentEl = document.querySelector('.parent-for-button');
parentEl.appendChild(newButton);
