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

const newButton = document.createElement("button");
const section = document.querySelector(".parent-for-button");


for (const key in buttonSettings.attr) {
    const value = buttonSettings.attr[key];
    newButton.setAttribute(key, value)
}
for (const key in buttonSettings.css) {
    const value = buttonSettings.css[key];
    newButton.style[key] = value;
}

const txtBtn = buttonSettings.text;
newButton.innerText = txtBtn;

section.appendChild(newButton)









// const objectToArray = function (object) {
//     let arrFromObject = [];
//     for (const key in object) {
//         const value = object[key];
//         arrFromObject = arrFromObject.concat(value);
//     }
//     return arrFromObject;
// }
// const arrFromObject = objectToArray(buttonSettings);


// const getKeys = function (arr, num) {
//     const keysArr = Object.keys(arr[num]);
//     return keysArr;
// }
// const getValues = function (arr, num) {
//     const valuesArr = Object.values(arr[num]);
//     return valuesArr;
// }
// const setKey = getKeys(arrFromObject, 0);
// const setValues = getValues(arrFromObject, 0);
// newButton.setAttribute(setKey[0], setValues[0]);
// newButton.setAttribute(setKey[1], setValues[1]);

//for(const key in arrFromObject){
// 
//}
// section.appendChild(newButton)









// newButton.setAttribute(keysArr0[0], valuesArr0[0]);