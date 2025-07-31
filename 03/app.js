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
const button = document.createElement('button');

button.setAttribute('class', buttonSettings.attr.className);
button.setAttribute('title', buttonSettings.attr.title);
button.innerText = buttonSettings.text;
for (const key in buttonSettings.css) {
  button.style[key] = buttonSettings.css[key];
}

buttonParent.appendChild(button);
