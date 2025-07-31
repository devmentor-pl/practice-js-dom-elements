console.log('DOM');

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

const sectionEl = document.querySelector('.parent-for-button');
if (sectionEl) {
  const btnEl = document.createElement('button');

  for (let key in buttonSettings.attr) {
    btnEl.setAttribute(key, buttonSettings.attr[key]);
  }
  for (let key in buttonSettings.css) {
    btnEl.style[key] = buttonSettings.css[key];
  }
  for (let key in buttonSettings) {
    btnEl.textContent = buttonSettings[key];
  }
  sectionEl.appendChild(btnEl);
}
