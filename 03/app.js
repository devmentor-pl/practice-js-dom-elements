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

const button = document.createElement('button');

for (const property in buttonSettings) {

    if (property === 'attr') {
        const attrObj = buttonSettings[property];
        //    console.log(property);
        //    console.log(attrObj);
        attrObj.className = 'btn';
        attrObj.title = 'super button';
        
        if (property === 'css') {
            attrObj.style.border = '1px solid #336699';
            attrObj.style.padding = '5px 20px';
            attrObj.color = '#444';

            if (property === 'text') {
                attrObj.innerText = 'Click me!'
            }
        }
    }



}