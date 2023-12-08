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





const classArea = document.querySelector('.parent-for-button');
if (classArea) {
    const newButton = document.createElement('button');
    classArea.appendChild(newButton);

    // newButton.className = buttonSettings.attr.className;
    // newButton.title = buttonSettings.attr.title;
    // newButton.style.border = buttonSettings.css.border;
    // newButton.style.padding = buttonSettings.css.padding;
    // newButton.style.color = buttonSettings.css.color;
    // newButton.innerText = buttonSettings.text;
    // console.log(newButton);

    for (const key in buttonSettings.attr) {

        newButton[key] = buttonSettings.attr[key];
    }

    for (const key in buttonSettings.css) {
        newButton.style[key] = buttonSettings.css[key];
    }


    newButton.innerText = buttonSettings.text;

}
