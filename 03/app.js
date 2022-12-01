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
const btn = document.createElement('button');
const btnParrent = document.querySelector('.parent-for-button');
btnParrent.appendChild(btn);
const keysList = [];
const valuesList = [];

const isObject = function(key) {
    if(key === null) {
        return false;
    }
    return (typeof key === "object");
}

for(const key in buttonSettings) {
    keysList.push(key)
    valuesList.push(key);
    if(isObject(buttonSettings[key])) {
        for(const key2 in buttonSettings[key]) {
            keysList.push(key2)
            valuesList.push(buttonSettings[key][key2]);
        }
        } else {
            valuesList.push(buttonSettings[key]);
        }
    }

    const arr = [];
    for(let i = 0; i<valuesList.length; i++) {
        if(valuesList[i].includes('attr')) {
            i++;
            console.log(keysList[i], valuesList[i]);
            btn.setAttribute(keysList[i], valuesList[i]); 
        }
        if(valuesList[i].includes('css')) {
            i++;
            console.log(keysList[i], valuesList[i]);
            btn.style.setProperty(keysList[i], valuesList[i]);
        }
        if(valuesList.includes("text")) {
            console.log(keysList[i], valuesList[i]);
            btn.innerText = valuesList[i]
        }
        else console.log('jakis blad')
    }
