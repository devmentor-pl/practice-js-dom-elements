console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444',
    },
    text: 'Click me!',
}

const buttonParent = document.querySelector(".parent-for-button");
const button = document.createElement("button");
buttonParent.appendChild(button);

// for (const key in buttonSettings.attr) {
//     if(key === "className"){
//         button.setAttribute("class", buttonSettings.attr[key])
//     } else {
//         button.setAttribute(key, buttonSettings.attr[key])
//     }
    
// }

// for (const key in buttonSettings.css) {
//     button.style[key] = buttonSettings.css[key]
// }

// button.textContent = buttonSettings.text;

for(const key in buttonSettings){
    for(const item in buttonSettings[key]){
        if(key === "attr"){
            if(item === "className"){
                button.setAttribute("class", buttonSettings[key][item] )
            } else {
                button.setAttribute("item", buttonSettings[key][item])
            }
        } else if(key === "css"){
            button.style[item] = buttonSettings[key][item]
        } else if(key === "text"){
            button.textContent = buttonSettings[key]
        }
    }
}