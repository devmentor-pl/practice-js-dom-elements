console.log('DOM');
const btn = document.createElement("button");
const element = document.querySelector(".parent-for-button");
element.appendChild(btn);
const button = document.querySelector("button");
console.log(button);
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
button.style.cssText = buttonSettings['css']['border'];

//button.style = buttonSettings.css.border;
/* for (const property in buttonSettings) {
    //button.style.border = buttonSettings[property][property][property];
    //button.style.cssText = buttonSettings.css;
    for (const key in buttonSettings['css']) {
        button.style.cssText = buttonSettings['css'][key];
    }
  } */
  for (const key in buttonSettings.css) {
    button.style[key] = buttonSettings.css[key];
}
for (const key in buttonSettings.attr) {
    button.setAttribute(key, buttonSettings.attr[key]);
}
button.textContent = buttonSettings.text;

  //button.style.cssText = JSON.stringify(buttonSettings.css);

/*button.setAttribute("style", JSON.stringify(buttonSettings.css))
settingAtts = function () {

} */
