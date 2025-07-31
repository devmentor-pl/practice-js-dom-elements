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


const contSection = document.querySelectorAll('section.parent-for-button');

for(const section of contSection){
    const button = document.createElement('button'); // Tworzę przycisk
    

    button.className = buttonSettings.attr.className; // Dodaje klasę
    button.title = buttonSettings.attr.title; // Dodaje atrybut title

for(const styleName of Object.keys(buttonSettings.css)){ 
    button.style[styleName] = buttonSettings.css[styleName];
}

/* 

      Które rozwiązanie stostuje się generująć wartości z tablic / obiektów?

      for (const [styleName, value] of Object.entries(buttonSettings.css)) {
        button.style[styleName] = value;
      } 
        

*/

button.textContent = buttonSettings.text; // Dodaje txt

section.appendChild(button); // Dopalam przycisk
}