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


const parent = document.querySelector('.parent-for-button');
const newButton =  document.createElement('button');

for (const type in buttonSettings){
    
    switch (type) {
        case 'attr': 
            const attr = buttonSettings['attr'];
            for (const key in attr){                      
                 newButton[key]=attr[key];
            }
            break;

        case 'css':
            const style = buttonSettings['css'];
            for (key in style){
                newButton.style[key]=style[key];
            }
            break;

        case 'text':
            newButton.textContent=buttonSettings['text'];
            break;
        default:            
            break;
            
    }
};

parent.appendChild(newButton);



