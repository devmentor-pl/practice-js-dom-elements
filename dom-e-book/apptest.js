// wyszukiwanie elemntow 

const divElement = document.querySelector('div');
if(divElement !== null) {
    divElement.textContent = 'new text';
}
// console.log(divElement)

const firstChildWithClass = document.querySelector('button.btn:first-child');
if(firstChildWithClass !== null){
    firstChildWithClass.className = 'newClass';
}
// console.log(firstChildWithClass)

// const element = document.querySelector('.notExist');

// element.textContent = 'new text';
// console.log(element);

// const sectionElement = document.querySelector('section');
// const headerElementInSection = sectionElement.querySelector('header');

// const headerElementInSection = sectionElement.querySelector('section > header')


//wyszukiwanie elementow #02.querySelectoAll()  --- wyszukiwanie w tym samym typie elementow 
// dokumencie

// const pList = document.querySelectorAll('p');
// const arr1 = 
// array.from(pList);

// zamieniam NodeList na tablicę
// const onlyEven = arr1.filter(function(el, index) {
//     return index % 2;
    // przypisuje do [onlyEven] elementy,
    // ktorych indeks jest parzysty
// });

// const arr2 = [...pList];
// uzycie rozproszenia do utworzenia tablicy
// const firstEmpty = arr2.find (function(el){
//     return el.innerText === '' ? true : false;
// });

// for(let i=0; i < pList.length; i++){
//     pList[i].textContent = i + '. Kolejny wiersz';
// }
// console.log(pList)

// pList.forEach(function(element, index){
//     element.textContent = index + '. Kolejny wiersz'
// })

// const divList = document.querySelectorAll('section > div');

// const commentsContentList = document.querySelectorAll('.comments_content');

// .getElementById wyszukuje tylko po nazwie ID

// wyszukaj element </div>
const fooElement = document.getElementById('foo');
if(fooElement !== null) {
    fooElement.textContent = 'new text'
}

// wyszukaj element </p>
const barElement = document.getElementById('bar');
if(barElement !== null) {
    barElement.className = 'newClass';
}

// . getElementsByClassName() wyszukiwanie po klasie

const boxList = document.getElementsByClassName('box');
const arr = Array.from(boxList);
arr.forEach(function(element){
    element.getElementsByClassName.border = '1px solid green'
})

// .getElementsByTagName() wyszukiwanie wielu elementow po nazwie tagu 

const divList = document.getElementsByTagName('div');
for(let i=0; i<divList.length; i++) {
    divList[i].textContent = 'index ->' + i;
}

// Łączenie wysukiwań

const fooE1 = document.querySelector('#foo1');
if(fooE1){
    const boxList = fooE1.getElementsByClassName('box');
    for(let i=0; i<boxList.length; i++){
        const pList = boxList[i].querySelectorAll('p');
        pList.forEach(function(p){
            p.style.border = '2px solid green'
        });
    }
}

// Operacje na elementach

// => Atrybuty

const imageElement = document.querySelector('img');
if(imageElement && !imageElement.hasAttribute('src')){
    imageElement.setAttribute(
        'src',
        'default.png'
    );
}

const imageList = document.querySelectorAll('img');
imageList.forEach(function(item) {
    item.removeAttribute('class');
    console.log(item.getAttribute('alt'));
});

//.dataset 

const liElement = document.querySelector('li');
if(liElement) {
    liElement.setAttribute('data-color', 'red');
    liElement.dataset.bgColor = 'green';
    console.log(liElement.dataset.age,
        liElement.dataset.city,);
}
const section = document.querySelector('.comments');
if(section) {
    const idValue = section.id;
}

//zmiana wartosci atrybutu

// const section = document.querySelector('.comments');
// if(section) {
//     section.id = 'newId';
// }

//  const section = document.querySelector('.comments');
// if(section) {
    // section.setAttribute('id', 'newId');

//Klasy!!

const sectionElement = document.querySelector('#commentsList');
if(sectionElement) {
    const className = sectionElement.className;
    if(className.includes('comments')){
        sectionElement.className = '';
    }
}

const sectionElement = document.querySelector('.comments');

if(sectionElement) {
    const classRemove = 'comments--active';
    const className = sectionElement.className;
    sectionElement.className = className.replace(classToRemove, '');
}

if(sectionElement){
    sectionElement.classList.toggle('comments--active');
}

// zawartosc elementow

const pElement = document.querySelector('p');
console.log(pElement.innerText, pElement.innerHTML, pElement.textContent,);

pElement.innerHTML = 'Tekst z <strong>ważna</strong> informacja';

const inputEl = document.querySelector('input');
const commentsEl = document.querySelector('ul');
if(inputE1 && comentsE1) {
    const newLi = document.createElement('li');
    newLi.innerHtml = inputE1.value;
    commentsEl.appendChild(newLi);
}

//style

const divElement = document.querySelector('div');
if(divElement){
    divElement.style.backgroundColor = 'blue';

    divElement.style.border = '1px solid yellow';
    divElement.style.fontSize = '14px';
}

if(divElement) {
    if(divElement.style.color === 'red') {
        divElement.innerText = 'Div is red!'
    }
}

const divEl = document.querySelector('div');
if(divEl) {
    console.log(divEl.style.color);
    const allStyles = getComputedStyle(divEl);
    console.log(allStyles.color);
}

if(divEl) {
    const styles = getComputedStyle(divEl);
    const oldColor = styles.getPropertyValue('--color');
    console.log(oldColor);
    const docElement = document.documentElement;
    docElement.style.setProperty('--color', 'orange');
    const newColor = styles.getPropertyValue('--color');
    console.log(newColor);
}

//TWORZENIE ELEMENTOW

//tworzy nowy element
const newSection = document.createElement('section');

//dodaje klase
newSection.classList.add('comments');

//dodaje tekst
newSection.innerText = 'Lorem ipsum...';

//dodanie atrybutu data-label
newSection.dataset.label = 'Some text...';

//dodanie identyfikatora 
newSection.id = 'commentsList';

// OSADZANIE ELEMENTOW  

// dodaje element jako ostatnie dziecko

const articleElement = document.querySelector('article');
if(article) {
    const newSection = document.createElement('section');

    newSection.classList.add('comments');
    newSection.innerText = 'lorem ipsum...';
    newSection.database.label = 'some text...';
    newSection.id = 'commentsList';

    articleElement.appendChild(newSection);
}

// dodanie jako pierwsze

const articleElement = document.querySelector('article');
const pElement = articleElement.querySelector('p:first-child');

if(articleElement && pElement){
    const newEl = document.createElement('header');
    newEl.innerText = 'some text...';
    articleElement.insertBefore(newEl, pElement);
}


// zamiana elemntow

if(articleElement && pElement) {
    const newEl = document.createElement('header');
    newEl.innerHTML = pElement.innerHTML;
    articleElement.replaceChild(newEl, pElement);
}

// przeniesienie elementow

const pEl = document.querySelector('p');
const sectionEl = document.querySelector('section');
if(sectionEl && pEl){
    sectionEl.appendChild(pEl);
}


//Kopiowanie elementow

const pEl = document.querySelector('p');
const sectionEl = document.querySelector('section');
if(sectionEl && pEl) {
 const clonePEl = pEl.cloneNode(true);
 // kopiujemy element z całą jego zawartością
 sectionEl.appendChild(clonePEl);
 // dodajemy kopię elementu <p/>
 // do elementu <section/>
 // od teraz element <p/>
 // znajduje się w obu miejscach
}

//Usuwanie elementow 

const articleElement =
 document.querySelector('article');
const pElement =
 articleElement.querySelector('p:first-child');
if(articleElement && pElement) {
 articleElement.removeChild(pElement);
 // w tym momencie element <p/>
 // nie istnieje w drzewie DOM,
 // co oznacza, że jest niewidoczny
 // dla użytkownika
}

// Poruszanie sie po DOM 

const btnEl = document.querySelector('button');
if(btnEl) {
 const sectionEl = btnEl.parentElement;
 sectionEl.style.display = 'none';
 // nie sprawdzam, czy parent istnieje,
 // ponieważ węzeł zawsze posiada rodzica
 // jeśli nie jest korzeniem
 // i został dodany do DOM
 const mainEl = sectionEl.nextElementSibling;
 if(mainEl) {
 mainEl.style.display = 'block';
 }
}


const ulElement = document.querySelector('ul');
if(ulElement && ulElement.hasChildNodes()) {
 // jeśli element został wyszukany
 // i posiada dzieci
 const children = ulElement.children;
 // zapisz wszystkie elementy do zmiennej
 if(children.length > 1) {
 // jeśli liczba dzieci
 // jest większa niż 1, to
 children[1].innerText = 'second child';
 // zmieniam treść drugiemu li
 }
}

const ulElement = document.querySelector('ul');
if(ulElement && ulElement.hasChildNodes()) {
 // jeśli element został wyszukany
 // i posiada dzieci
 const first = ulElement.firstElementChild;
 // zapisuję odniesienie do pierwszego elementu
 // jeśli nie istnieje, to będzie null
 const last = ulElement.lastElementChild;
 // zapisuję odniesienie do ostatniego elementu
 // jeśli nie istnieje, to będzie null
 console.log(first, last);
}

const ulElement = document.querySelector('ul');
if(ulElement && ulElement.hasChildNodes()) {
 // jeśli element został wyszukany
 // i posiada dzieci
 const children = ulElement.children;
 // zapisz wszystkie dzieci do zmiennej
 console.log('Pierwsze dziecko ma potomstwo:')
 if(children[0].hasChildNodes()) {
 console.log(true);
 }
 console.log('Drugie dziecko ma potomstwo:')
 if(children[1].hasChildNodes()) {
 console.log(true);
 }
 console.log('Trzecie dziecko ma potomstwo:')
 if(children[2].hasChildNodes()) {
 console.log(true);
 }
}
