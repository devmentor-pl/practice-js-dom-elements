console.log('DOM');

//__________________________________________________________part_1
{
const navBar = document.querySelector('.navBar');
const ulElBar = document.createElement('ul');

for(let i = 0; i<3; i++){
    const liElBar = document.createElement('li');
    const aElBar = document.createElement('a');
    ulElBar.appendChild(liElBar);
    liElBar.appendChild(aElBar);
};

const liEl = ulElBar.querySelectorAll('li');
liEl[0].textContent = "start";
liEl[1].textContent = "galeria";
liEl[2].textContent = "kontakt";

//const aElBar = ulElBar.link  //?dev coś takie też jest... Marek sprawdź to 
const aElBar = ulElBar.querySelectorAll('a'); 







console.log(ulElBar);

addSomeItems(createSomeEl("ul"), navBar, 1);
addSomeItems(createSomeEl("li"), ulElBar, 3);



function createSomeEl(nameEl, number){
    for(let i = 0; i < number; i++){
        document.createElement(nameEl);
    };
}
function addSomeItems(item, parentEl, number){
    for(let i = 0; i < number; i++){
        parentEl.appendChild(item.cloneNode(true));
    };
}


};
































//__________________________________________________________part_2
{
// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

// const navMenu = [...document.getElementsByTagName('nav')];
//?dev sprawdź czemu to nie działa dla ??? : 
// const navMenu = document.getElementsByTagName('nav');
const navMenu = document.querySelector('.navMenu');
// console.log(navMenu);

const ulEl = document.createElement('ul');
menuItems.forEach(function(item){
    const liEl = document.createElement('li');
    const aEl = document.createElement('a');
    aEl.setAttribute('href', item.url);
    aEl.textContent = item.text;
    liEl.appendChild(aEl);
    ulEl.appendChild(liEl);
});

navMenu.appendChild(ulEl);

}; //?dev Przy takim "blokowaniu" dawać ten średnik po } ? Czy nie? ... chyba nie...?  //*see Kiedy wg dajemy średnik spr.// 