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


const sectionEl = document.querySelector('.parent-for-button');
const buttonEl = document.createElement('button');

if(sectionEl){
    sectionEl.appendChild(buttonEl);

for(const key in buttonSettings){
    buttonEl.textContent = buttonSettings[key];
}
for(const key in buttonSettings.attr){
    buttonEl.setAttribute(key, buttonSettings.attr[key])
}
for(const key in buttonSettings.css){
    buttonEl.style.setProperty(key, buttonSettings.css[key]) 
}};