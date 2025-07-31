const parent = document.querySelector(".parent-for-button");

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

if(parent){
   const newButton= document.createElement('button');
   newButton.classList.add('btn');
   newButton.setAttribute('title','super button');
   
   newButton.style.border='1px solid #336699';
   newButton.style.padding='5px 20px';
   newButton.style.color='#444';
   newButton.innerText=buttonSettings.text;
   
parent.appendChild(newButton);
}


