console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '3px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Please Click me!',
}

// Create button element
const button = document.createElement('button');

// Attributes
for (const attrName in buttonSettings.attr) {
    button.setAttribute(attrName, buttonSettings.attr[attrName]);
}

// Styles
for (const styleName in buttonSettings.css) {
    button.style[styleName] = buttonSettings.css[styleName];
}


button.textContent = buttonSettings.text;

// Add the button to the parent element with class .parent-for-button
document.querySelector('.parent-for-button').appendChild(button);

/* Tworzenie elementu <button> za pomocą metody document.createElement('button'). 
Nowo utworzony element jest przechowywany w zmiennej button.

Pętla for-in przechodzi przez wszystkie atrybuty zdefiniowane w buttonSettings.attr 
i ustawia je na elemencie <button>.

Podobnie jak w przypadku atrybutów, pętla FOR przechodzi przez wszystkie style 
zdefiniowane w buttonSettings.css i ustawia je jako właściwości 
stylów dla elementu <button>. Każda nazwa stylu i przypisana wartość zostają 
przypisane do style elementu


 */