console.log('DOM');
const parent = document.querySelector('.parent-for-button')

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
};

const newBtn = document.createElement("button");
newBtn.innerText = buttonSettings.text;

for (const key in buttonSettings.css) {
    newBtn.style[key] = buttonSettings.css[key];
};

for (const key in buttonSettings.attr) {
    if (key === "className") {
        newBtn.className = buttonSettings.attr.className;
    } else {
        newBtn.setAttribute(key, buttonSettings.attr[key]);
    }
};

parent.appendChild(newBtn);