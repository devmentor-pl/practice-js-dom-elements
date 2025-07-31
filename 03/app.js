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

const button = document.createElement('button')
const articleElement = document.querySelector('.parent-for-button');

if (articleElement) {
    articleElement.appendChild(button);
}

// if(button) {
//         button.setAttribute(
//             className = 'btn',
//             title = 'super button'
//         );
//         button.style.border = '1px solid #336699',
//         button.style.padding = '5px 20px',
//         button.style.color = '#444'
//         button.textContent = "Click me!"
// } to działa super, ale tego nie chcemy

for (const key in buttonSettings.attr) {
    const attr = buttonSettings.attr[key]
    button[key] = attr;
}

for (const key in buttonSettings.css) {
    const css = buttonSettings.css[key]
    button.style[key] = css;
}

if(button) {
    button.textContent = "Click me!"
};