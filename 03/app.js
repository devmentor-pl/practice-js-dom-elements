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

//dodanie buttona wewnątrz section
const parentElement = document.querySelector('.parent-for-button');
const newButton = document.createElement('button');
parentElement.appendChild(newButton);
console.log(newButton);

// dodawanie atrybutów - pętla for in
// 1 attr (obiekt) 
// 2 css (obiekt)
// 3 text (string)

for(const elAttr in buttonSettings.attr
    ) {
    newButton[elAttr] = buttonSettings.attr[elAttr];
    newButton.setAttribute(elAttr, buttonSettings.attr[elAttr]);
}    

for(const elCss in buttonSettings.css) {
    newButton.style[elCss] = buttonSettings.css[elCss];
}

newButton.innerText = buttonSettings.text;