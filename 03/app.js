console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '10px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
}

const buttonParent = document.querySelector('.parent-for-button');

if(buttonParent){
const button = document.createElement('button');
buttonParent.appendChild(button);

button.className = 'btn';
button.title = "super button";
button.style.border = '3px solid #336699';
button.style.padding = '5px 20px';
button.style.color = '#444';
button.innerHTML = 'Click ME!';


// for(const value in buttonSettings){
//     button.style.value
// }




console.log(button);
}