console.log('DOM')

const buttonSettings = {
    attr: {
        class: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444',
        cursor: "pointer",
        borderRadius: '3px'
    },
    text: 'Click me!',
}

const parentElement = document.querySelector(".parent-for-button")

const createElement = (btnSettings, tag) => {
    const btn = document.createElement(tag)

    for (const setting in btnSettings) {
        if (typeof btnSettings[setting] === 'object') { // inner/nested keys: object
            for (const property in btnSettings[setting]) {
                setting === "attr" ? btn.setAttribute(property, btnSettings[setting][property]) : null
                setting === "css" ? btn.style[property] = btnSettings[setting][property] : null
            }
        }
        // plain keys & values
        setting === "text" ? btn.textContent = btnSettings[setting] : null
    }

    return btn
}
const element = createElement(buttonSettings, "button")

parentElement.appendChild(element)