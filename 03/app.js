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



const section = document.querySelector('.parent-for-button');

if (section) {

    const newButton = document.createElement('button');

    section.appendChild(newButton);

    newButton.classList.add(buttonSettings.attr.className);
    newButton.setAttribute('title', buttonSettings.attr.title);

    console.log(buttonSettings.attr.className);
    
    for (const element in buttonSettings.css) {
        newButton.style[element] = buttonSettings.css[element]
    }

    newButton.innerText=buttonSettings.text;
}