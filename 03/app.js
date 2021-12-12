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
            }
            else {
                button.setAttribute(`${clas}`, `${buttonSettings[key][clas]}`);
            }
        }
    }
    else if(key === "css") {
        for(let cssstyle in buttonSettings[key]) {
            button.style[cssstyle] = buttonSettings[key][cssstyle];
        }
    }

    else { 
        for(let txt in buttonSettings[key]) {
            button.textContent = buttonSettings[key];

        }
    }
}

section.appendChild(button);