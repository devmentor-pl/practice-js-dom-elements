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

const button = document.createElement('button');
const buttonSection = document.querySelector('.parent-for-button');
buttonSection.appendChild(button);


for(let key in buttonSettings) {
   if(key === 'attr'){
      for(let attrKey in buttonSettings[key]) {
         button.setAttribute(attrKey, buttonSettings[key][attrKey])
      };
   };
   if(key === 'css') {
      for(let cssKey in buttonSettings[key]) {
         button.style[cssKey] = `${buttonSettings[key][cssKey]}`;
      };
   };
   if(key === 'text') {
      button.innerHTML = buttonSettings[key];
   };
};

// drugie rozwiązanie z wykorzystaniem switch:

// for(let key in buttonSettings) {
//    switch(key) {
//       case 'attr':
//          for(let attrKey in buttonSettings[key]) {
//             button.setAttribute(attrKey, buttonSettings[key][attrKey])
//          };
//       break;
//       case 'css':
//          for(let cssKey in buttonSettings[key]) {
//             button.style[cssKey] = `${buttonSettings[key][cssKey]}`;
//          };
//       break;
//       case 'text':
//          button.innerHTML = buttonSettings[key];
//       break;
//    };
// };
