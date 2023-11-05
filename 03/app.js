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

const btnParent = document.querySelectorAll('.parent-for-button');

if (btnParent) {
    const newButton = document.createElement('button');

    newButton.setAttribute("class", 'btn');
    newButton.setAttribute("title", 'super button');

    newButton.style.color = '#444';
    newButton.style.border = '1px solid #336699';
    newButton.style.padding = '5px 20px'
    newButton.innerText = 'Click me!'



    btnParent.appendChild(newButton);   //tutaj błąd: app.js:31 Uncaught TypeError: btnParent.appendChild is not a function
    //at app.js:31:15



}

