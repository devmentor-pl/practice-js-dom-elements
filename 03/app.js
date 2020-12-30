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


// const testBnt = document.getElementsByClassName("test");
// console.log([...testBnt]); //?dev czemu mi to nie działa? 
//?dev Jak to zrobić z getElementsByClassName?
// const parentBtn = [...document.getElementsByClassName('parent-for-button')];

const btnParent = document.querySelector('.parent-for-button');
const newBtn = document.createElement('button');

//?dev Zapytac dlaczego to ma juæ przypisany attryb
// console.log(newBtn); 

function fillSettings(btn, settings) {
    for(const property in settings) {
        if(property === "attr"){
            setAttributes(btn, settings[property]);
        } else if(property === "css") {
            setStyles(btn, settings[property]);
        } else if(property === "text") {
            setText(btn, settings[property]);
        };
    };
};

function setText(btn, text){
    btn.textContent = text;                   // Insert text
}

function setStyles(btn, styles) {
    for(const property in styles) {
        btn.style[property] = styles[property];    
    };
}

function setAttributes(btn, attributes) {
    for(const property in attributes){
        btn.setAttribute(property, attributes[property]);
    };
};

fillSettings(newBtn, buttonSettings);
btnParent.appendChild(newBtn);  