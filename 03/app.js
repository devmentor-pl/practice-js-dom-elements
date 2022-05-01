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

const button=document.createElement('button')
const parents=document.querySelector('.parent-for-button')
parents.appendChild(button)

button.innerText=buttonSettings.text
for(const key in buttonSettings.attr){
    const value=buttonSettings.attr[key]
    console.log(value)
    button[key]=value
    console.log(button)
}

for(const key in buttonSettings.css){
    const styles=buttonSettings.css[key]
    button.style[key]=styles 
}








for(const property in buttonSettings){
    console.log(`${property} : ${buttonSettings[property]}`)
}