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

const btnParent = document.querySelector('.parent-for-button');

if (btnParent) {
    const btnNew = document.createElement('button');

    for (item in buttonSettings.attr) {
        if (typeof buttonSettings.attr === 'undefined') { null } // nie potrafię zdecydować, czy jest tu to potrzebne, bo gdy tego nie ma, a usuwam właściwość attr z obiektu buttonSettings, to nie wyrzuca błędu (w sumie dlaczego?).
        else {
            btnNew.className = buttonSettings.attr.className;
            btnNew.setAttribute('title', buttonSettings.attr.title)
        }
    }
    for (item in buttonSettings.css) {
        if (typeof buttonSettings.css === 'undefined') { null }
        else {
            btnNew.style.border = buttonSettings.css.border
            btnNew.style.padding = buttonSettings.css.padding
            btnNew.style.color = buttonSettings.css.color
        }
    }
    if (typeof buttonSettings.text === 'undefined') { null } // tu np. sprawdzenie tego warunku się przydaje, bo inaczej wstawia do buttona tekst 'undefined'.
    else {
        btnNew.innerHTML = buttonSettings.text;
    }

    btnParent.appendChild(btnNew)
    console.log(btnParent.innerHTML)
}