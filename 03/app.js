// Utwórz element <button/>, który:

// zgodnie z powyższymi wytycznymi będzie posiadał odpowiednie atrybuty, style i tekst; do stworzenia tego obiektu (elementu HTML) spróbuj wykorzystać pętlę, np. for...in,
// zostanie wstawiony do elementu o klasie .parent-for-button przy pomocy JavaScriptu.
// Pamiętaj, aby ten przycisk był widoczny na stronie.

console.log('DOM');

const sectionEl = document.querySelector('section')
if (sectionEl) {
    const newButton = document.createElement('button');

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
    const styles = buttonSettings['css'];
    // newButton.style['background'] = 'red';
    // newButton.style['padding'] = '5px 20px';
    // newButton.style['border'] = '1px solid #336699';
    // newButton.style['color'] = '#444';

    for (const prop in buttonSettings['css']) {
        const value = buttonSettings['css'][prop]
        console.log(prop, value)
        newButton.style[prop] = value;
    }
    // newButton['title'] = 'To jest tyul';
    // newButton['className'] = 'btn';

    for (const key in buttonSettings['attr']) {
        const value = buttonSettings['attr'][key]
        newButton[key] = value;
    }
    newButton.innerText = buttonSettings.text;

    //   const value = buttonSettings['attr'];

    //     const value3 = buttonSettings['text'];
    // for (const prop in buttonSettings) {
    //     // const value = buttonSettings[prop];
    //     const value = buttonSettings['attr'];
    //     const value2 = buttonSettings['css'];
    //     const value3 = buttonSettings['text'];
    //     // newButton.classList.add('prop');
    //     // console.log("this person " + prop+ ' is '+ value )
    //     console.log(value);
    //     console.log(value2);
    //     console.log(value3);
    //     newButton.classList.add()
    //     // const title='title';
    //     // console.log(buttonSettings['attr'][title])
    // }

    sectionEl.appendChild(newButton);
}
// const buttonSettings = {
//     attr: {
//         className: 'btn',
//         title: 'super button'
//     },
//     css: {
//         border: '1px solid #336699',
//         padding: '5px 20px',
//         color: '#444'
//     },
//     text: 'Click me!',
// }

