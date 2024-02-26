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

// dodawanie atrybutów - DZIAŁA

// newButton.classList = 'btn';
// newButton.innerText = 'text';
// newButton.title = 'super button';
// newButton.style.border = '1px solid #336699';
// newButton.style.padding = '5px 20px';
// newButton.style.color = '#444';
// newButton.innerText = 'Click me!';


// pętla for in - dodawanie atrybutów do przycisku

for(const el in buttonSettings) {
const newEl = buttonSettings[el];
// console.log(newEl); //dwa obiekty i text
for(const newElInside in newEl) {
    const BtnAttributes = newElInside; // 
    console.log(newElInside); // wyświetla atrybuty oraz cyfry (nie wiadomo skąd)
    newButton.BtnAttributes = "  "; //??
    // czy mamy pobrać take kolejną pętlą wartości i pętlą przypisać je do atrybutów?
}
}

console.log(newButton);