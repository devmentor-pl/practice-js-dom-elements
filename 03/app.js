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
const parentForBtn = document.querySelector('.parent-for-button');
if (parentForBtn) {
    const btn = document.createElement('button');

    for (const value in buttonSettings) {
        if (value === 'text') btn.innerText = `${buttonSettings[value]}`
        const keys = buttonSettings[value];
        for (const value in keys) {
            if (value === 'className') btn.classList.add(keys[value]);
            if (value === 'title') btn.setAttribute('title',keys[value]);
            if (value === 'border') btn.style.setProperty(value,keys[value]);
            if (value === 'padding') btn.style.setProperty(value, keys[value]);
            if (value === 'color') btn.style.setProperty(value, keys[value]);
        }

    }
    parentForBtn.appendChild(btn)
    console.log(btn);
}