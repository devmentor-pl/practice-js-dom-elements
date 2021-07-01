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

// 1 wyszukaj element rodzica
const parentElement = document.querySelector('.parent-for-button');

if(parentElement) {
    // 2 stwórz element button
    const btn = document.createElement('button');
    
    // pobierz potrzebne właściwości, content i atrybuty elementu
    let attr = buttonSettings.attr
    let css = buttonSettings.css
    let text = buttonSettings.text
    
    // dodanie contentu
    btn.textContent = text;
    // dodanie klasy
    btn.classList.add(attr.className);
    // dodanie atrybutów
    for (let attrName in attr) {
        btn.setAttribute(attrName, attr[attrName])
    }

    
    // dodanie styli
    for (let key in css) {
        btn.style.setProperty(key, css[key])
    }
    
    // 3 dodanie elementu do HTML
    parentElement.appendChild(btn);
    }
    
