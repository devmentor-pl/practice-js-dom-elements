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


const buttonSection  = document.querySelector('.parent-for-button')


// if(buttonSection) {
//     const button = document.createElement('button');

//     button.classList.add(buttonSettings.attr.className);
//     button.title = buttonSettings.attr.title;
//     button.style.border = buttonSettings.css.border;
//     button.style.padding = buttonSettings.css.padding;
//     button.style.color = buttonSettings.css.color;
//     button.textContent = buttonSettings.text;

//     buttonSection.appendChild(button)
// }


const button = document.createElement('button');

for(let key in buttonSettings.attr) {
    button.setAttribute(key, buttonSettings.attr[key])
}
for(let key in buttonSettings.css) {
    button.setAttribute(key, buttonSettings.css[key])
}

button.textContent = buttonSettings.text;

buttonSection.appendChild(button)

