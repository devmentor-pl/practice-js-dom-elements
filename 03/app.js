'use strict';
const buttonSettings = {
  attr: {
    className: 'btn',
    title: 'super button',
  },
  css: {
    border: '1px solid #336699',
    padding: '5px 20px',
    color: '#444',
  },
  text: 'Click me!',
};

const buttonParent = document.querySelector('.parent-for-button');
if (buttonParent) {
  const newButton = document.createElement('button');
  // Set attr
  for (const key in buttonSettings.attr) {
    newButton.setAttribute(key, buttonSettings.attr[key]);
  }
  // Set CSS
  for (const key in buttonSettings.css) {
    newButton.style[key] = buttonSettings.css[key];
  }
  // Set text
  newButton.innerText = `${buttonSettings.text}`;
  buttonParent.appendChild(newButton);
}
