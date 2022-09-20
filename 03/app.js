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





const buttonParent = document.querySelector('.parent-for-button');

if (buttonParent) {
  const button = document.createElement('button')
  newBtn = document.createElement('button')
  buttonParent.appendChild (newBtn)
    for (keys in buttonSettings) {
      const value = buttonSettings[keys]
      if(keys === "text") 
        newBtn.innerHTML = value
      for (keys in value) {
        if(keys === 'className') 
          newBtn.classList.add(value[keys])
        if(keys === 'title') 
          newBtn.dataset.title = value[keys]
        if(keys === 'border') 
          newBtn.style.border = value[keys]
        if(keys === 'padding')
          newBtn.style.padding = value[keys]
        if(keys === 'color')
          newBtn.style.color = value[keys]
      }
   }
}

console.log(buttonParent)
