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
    const attributeList = buttonSettings.attr;
    const styleList = buttonSettings.css;
    const txt = buttonSettings.text;

    for (const key in attributeList) {
        btn.setAttribute(key, attributeList[key]);
    }
    for (const key in styleList) {
        const style = styleList[key];

        btn.style.setProperty(key, style);
    }
    btn.innerText = txt;

    btnParent.appendChild(btn);
}