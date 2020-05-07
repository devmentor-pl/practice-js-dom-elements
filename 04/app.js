console.log('DOM');

/*const ulCreate = document.createElement('ul')
console.log(ulCreate)
const liFirstCreate = document.createElement('li')
//liFirstCreate.innerText = 'home'
const aFirstCreate = document.createElement('a')
//console.log(liFirstCreate)
ulCreate.appendChild(liFirstCreate)
liFirstCreate.appendChild(aFirstCreate)
document.querySelector('nav').appendChild(ulCreate)
aFirstCreate.setAttribute('href', '/')
aFirstCreate.innerText = 'home'

const liSecondCreate = document.createElement('li')
const aSecondCreate = document.createElement('a')
ulCreate.appendChild(liSecondCreate)
liSecondCreate.appendChild(aSecondCreate)
aSecondCreate.setAttribute('href', '/gallery')
aSecondCreate.innerText = 'gallery'

const liThirdCreate = document.createElement('li')
const aThirdCreate = document.createElement('a')
ulCreate.appendChild(liThirdCreate)
liThirdCreate.appendChild(aThirdCreate)
aThirdCreate.setAttribute('href', '/contact')
aThirdCreate.innerText = 'contact'*/

const ulCreate = document.createElement('ul');
document.querySelector('nav').appendChild(ulCreate);
console.log(ulCreate);


const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
]
menuItems.forEach(function(el)
{
    if(ulCreate){
        //for(let i = 0; i < 3; i++){
    const liCreate = document.createElement('li');
    const aCreate = document.createElement('a');
    ulCreate.appendChild(liCreate);
    liCreate.appendChild(aCreate);
    if(aCreate){
    aCreate.setAttribute('href', el.url);
    aCreate.innerText = el.text}
    //console.log(liCreate, aC)}
    }
})