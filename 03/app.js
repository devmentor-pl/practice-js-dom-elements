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
const btn = document.createElement('button');
const btnParrent = document.querySelector('.parent-for-button');
btnParrent.appendChild(btn);


for(const attrName in buttonSettings.attr){
    btn.setAttribute(attrName, buttonSettings.attr[attrName]);
}
for(const cssName in buttonSettings.css){
    btn.style.setProperty(cssName, buttonSettings.css[cssName]);
}
for(const textName in buttonSettings.text){
    btn.textContent = buttonSettings.text;

}

// for(const loop in buttonSettings) {
//     if(loop === 'attr') {
//        const attrKeys = Array.from(Object.keys(buttonSettings.attr)).flat();
//        const attrValues = Array.from(Object.values(buttonSettings.attr)).flat();
//         for(let i = 0; i < attrKeys.length; i++){
//             btn.setAttribute(attrKeys[i], attrValues[i])
//         }
//     }
//     if(loop === 'css') {
//        const cssKeys = Array.from(Object.keys(buttonSettings.css)).flat();
//        const cssValues = Array.from(Object.values(buttonSettings.css)).flat();
//         for(let i = 0; i < cssKeys.length; i++){
//             btn.style.setProperty(cssKeys[i], cssValues[i])
//         }
//     }
//     if(loop === 'text') {
//         btn.innerText = buttonSettings.text;
//     }
// }
