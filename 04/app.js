console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];
//sposob pierwszy
/* const navElement = document.getElementsByTagName("nav")[0];
const ulElement = document.createElement('ul');
const liElement = document.createElement('li');
const liElementSec = document.createElement('li');
const liElementTrd = document.createElement('li');
navElement.appendChild(ulElement);
const array = [];
array[0]=liElement;
array[1]=liElementSec;
array[2]=liElementTrd;
const aElement = [];
aElement[0]=document.createElement('a');
aElement[1]=document.createElement('a');
aElement[2]=document.createElement('a');
const attContent = [];
attContent[0]="/";
attContent[1]="/gallery";
attContent[2]="/contact";
const textContent = [];
textContent[0]="home";
textContent[1]="gallery";
textContent[2]="contact";

for (let i=0; i<array.length; i++){
    array[i].appendChild(aElement[i]);
    ulElement.appendChild(array[i]);
    aElement[i].setAttribute("href", attContent[i]);
    aElement[i].innerHTML = textContent[i];

} */
// sposob drugi
const navElement = document.getElementsByTagName("nav")[0];
const ulElement = document.createElement('ul');
/*const liElement = document.createElement('li');
const liElementSec = document.createElement('li');
const liElementTrd = document.createElement('li');
const array = [];
array[0]=liElement;
array[1]=liElementSec;
array[2]=liElementTrd;
const aElements = [];
aElements[0]=document.createElement('a');
aElements[1]=document.createElement('a');
aElements[2]=document.createElement('a');
for (let i=0; i<array.length; i++){
    array[i].appendChild(aElements[i]);
    ulElement.appendChild(array[i]);

}
assignFunc = function () {

    aElement.setAttribute("href", menuItem.url);


}
aElements.forEach(aElement => assignFunc) */
navElement.appendChild(ulElement);

menuItems.forEach(function(element, index) {
const liElement = document.createElement('li');
ulElement.appendChild(liElement);
const aElement = document.createElement('a');
liElement.appendChild(aElement);
aElement.setAttribute("href", menuItems[index]['url']);
aElement.innerHTML = menuItems[index]['text'];
})