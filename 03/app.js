console.log('DOM');

// (1) Utwórz element `<button/>`, który wstawisz do elementu o klasie `.parent-for-button`.

const btn = document.createElement('button');
const parentBtn = document.querySelector('.parent-for-button');

// (2) W pliku `./app.js` znajdziesz obiekt, który określa ustawienia dla `button`-a:

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

// (3) Spróbuj utworzyć przy pomocy JavaScript taki obiekt (element HTML) zgodnie z wytycznymi używając do tego pętli 
// np. [for...in](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Polecenia/for...in).

for (const level_01 in buttonSettings) {
    const level_02 = buttonSettings[level_01];
    if (level_01 === 'attr') {
        for (const attr in level_02) {
            btn[attr] = level_02[attr];
            console.log(`attr: ${btn[attr]}`)
        }
    } else {
        if (level_01 === 'css') {
            for (const css in level_02) {
                btn.style[css] = level_02[css];
                console.log(`css: ${btn.style[css]}`)
            }
        } else {
            if (level_01 === 'text') {
                btn.textContent = buttonSettings[level_01];
                console.log(`text: ${btn.textContent}`)
            }
        }
    }
}

parentBtn.appendChild(btn);

console.log(btn)
console.log(parentBtn)
