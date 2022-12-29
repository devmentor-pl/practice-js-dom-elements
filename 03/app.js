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

const btnParent = document.querySelector('.parent-for-button');

if (btnParent) {
    const btn = document.createElement('button');

    for (const key in buttonSettings.attr) {
        btn.setAttribute(key, buttonSettings.attr[key]);
    }
    for (const key in buttonSettings.css) {

        btn.style.key = buttonSettings.css[key];
        // btn.setAttribute('style', key + buttonSettings.css[key])
    }
    btn.innerText = buttonSettings.text;

    // for (const key in buttonSettings) {

    //     console.log(buttonSettings[key]);

    //     console.log(Object(buttonSettings).value);

    // btn.setAttribute(buttonSettings[key], key)

    // if (key === 'attr') {
    //     for (const prop in buttonSettings[key]) {
    //         btn.setAttribute(prop, buttonSettings[key][prop])
    //     }
    // } else if (key === 'css') {
    //     for (const prop in buttonSettings[key]) {
    //         btn.style.prop = buttonSettings[key][prop];
    //     }
    // }
    btnParent.appendChild(btn);
    console.log(btn);
}



