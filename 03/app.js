console.log('DOM');

const buttonSettings = {
    attr: {
        class: 'btn',
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
    const { attr, css, text } = buttonSettings;

    for (const attribute in attr) { btn.setAttribute(attribute, attr[attribute]) };
    for (const style in css) { btn.style.setProperty(style, css[style]) };
    btn.innerText = `${text}`;

    parentForBtn.appendChild(btn);
    console.log(btn);
};