console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '20px 20px',
        color: '#444'
    },
    text: 'Click me!',
}

const button = document.createElement("button");
const section = document.querySelector('.parent-for-button');

for(let key in buttonSettings) {
    if(key === "attr") {
        for(let clas in buttonSettings[key]) {
            if(clas === "className") {
                button.className = buttonSettings[key][clas];
                // console.log(buttonSettings[key][clas]);
            }
        }
    }
}


for(let key in buttonSettings) {
    if(key === "attr") {
        for(let attribute in buttonSettings[key]) {
            if(attribute === "title") {
                button.setAttribute (`${attribute}`, `${buttonSettings[key][attribute]}`);
            }
        }
    }
}



for(let key in buttonSettings) {
    if(key === "css") {
        for(let cssstyle in buttonSettings[key]) {
            button.style[cssstyle] = buttonSettings[key][cssstyle];
        }
    }

}

for(let key in buttonSettings) {
    if(key === "text") {
        for(let text in buttonSettings[key]) {
            button.textContent = buttonSettings[key];

        }
    }
}


section.appendChild(button);