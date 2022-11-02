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


const objectToArray = function (object) {
    let arrFromObject = [];
    for (const key in object) {
        const value = object[key];
        arrFromObject = arrFromObject.concat(value);
    }
    return arrFromObject;
}
const arrFromObject = objectToArray(buttonSettings);

for (const key in arrFromObject) {

}
section.appendChild(newButton)









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

// for(const key in )











// newButton.setAttribute(keysArr0[0], valuesArr0[0]);