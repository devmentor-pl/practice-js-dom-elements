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
// wybieram parent for button
const parent = document.querySelectorAll('.parent-for-button');

console.log('typeof: ' + typeof parent);

// Utwórz element `<button/>`,
// który wstawisz do elementu o klasie `.parent-for-button`.
const newButton = document.createElement('button');
console.log('new button: ' + newButton);


// *******************
// BUTTON, for in loop
// *******************

for (let el in buttonSettings) {

  // attributes
  if (el === 'attr') {
    newButton.classList.add(buttonSettings.attr.className);
    newButton.title = buttonSettings.attr.title;

  // styling
  } if (el === 'css') {
    newButton.style.border = buttonSettings.css.border;
    newButton.style.padding = buttonSettings.css.padding;
    newButton.style.color = buttonSettings.css.color;
  }
}
  // text
newButton.innerText = buttonSettings.text;

console.log('typeof: ' + typeof + '' + newButton);
console.log(newButton);


// add the button to the page
// dlaczego to nie działa?
parent.appendChild(newButton);

// buttonSettings.innerHTML = buttonSettings;
// parent.appendChild(buttonSettings);

// parent.appendChild(z);
// parent.insertAdjacentHTML('beforeend', section)
