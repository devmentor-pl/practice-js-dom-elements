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

const sectionEl = document.querySelector('section');
const buttonEl = document.createElement('button');
buttonEl.setAttribute('class', buttonSettings.attr.className);
buttonEl.setAttribute('title', buttonSettings.attr.title);
buttonEl.style.border = buttonSettings.css.border;
buttonEl.style.padding = buttonSettings.css.padding;
buttonEl.style.color = buttonSettings.css.color;
buttonEl.textContent = buttonSettings.text;
console.log(buttonEl);

sectionEl.appendChild(buttonEl);