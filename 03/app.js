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

const buttonParent = document.querySelector('.parent-for-button');
const newButton = document.createElement('button');
buttonParent.appendChild(newButton);

const buttonAttributes = buttonSettings.attr;
const styles = buttonSettings.css;

for (let attr in buttonAttributes) {
    newButton.setAttribute(attr, buttonAttributes[attr]);
}
for (let style in styles) {
    newButton.style.setProperty(style, styles[style]);
    newButton.textContent = buttonSettings.text;
}
