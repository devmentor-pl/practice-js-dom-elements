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

const parentEl = document.querySelector('.parent-for-button')

// if (parentEl) {
//   const button = document.createElement('button');
//   button.classList.add('btn');
//   button.title = 'suber button'
//   button.innerText = 'Click me';
//   button.style.border = '1px solid #336699';
//   button.style.padding = '5px 20px';
//   button.style.color = '#444';
//   parentEl.append(button);
// }
// console.log(parentEl);

const button = document.createElement('button');
button.innerText = "Click me"

for (const key in buttonSettings.attr) {
  button.setAttribute(key, buttonSettings.attr[key]);
}

for (const key in buttonSettings.css) {
  button.setAttribute(key, buttonSettings.css[key]);
}

parentEl.append(button);
console.log(parent.el);
