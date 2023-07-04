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

if (btnParent) {
    const btnNew = document.createElement('button');

        for (item in buttonSettings.attr) {
            btnNew.className = buttonSettings.attr.className;
            btnNew.setAttribute('title', buttonSettings.attr.title)
        }
        for (item in buttonSettings.css) {
            btnNew.style.border = buttonSettings.css.border
            btnNew.style.padding = buttonSettings.css.padding
            btnNew.style.color = buttonSettings.css.color
        }

    if (buttonSettings.text) { btnNew.innerHTML = buttonSettings.text; }

    btnParent.appendChild(btnNew)
    console.log(btnParent.innerHTML)
}