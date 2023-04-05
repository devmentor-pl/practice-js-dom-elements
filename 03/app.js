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

const newButton = document.createElement('button');
const arr = [];
for (const key1 in buttonSettings) {

    const insideButtonSettings = buttonSettings[key1];
    for (const key2 in insideButtonSettings) {

        if (key1 === 'attr') {
            newButton.setAttribute(key2, insideButtonSettings[key2]);
        }
        if (key1 === 'css') {
            arr.push(key2 + ':' + insideButtonSettings[key2])
        }
        
    }
    if (arr.length !== 0 && !newButton.hasAttribute('style')) {
        const newArr = arr.join(';')
        newButton.setAttribute('style', newArr);
    }
    if (key1 === 'text') {
        newButton.innerText = buttonSettings[key1];
    }
}

const buttonParent = document.querySelector('.parent-for-button');
buttonParent.appendChild(newButton);