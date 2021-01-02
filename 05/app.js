console.log('DOM');

const curr = document.querySelector('.js-curr');

const deleteBtn = curr.cloneNode(false);
//console.dir(deleteBtn.classList);   //?dev to z tym consol.dir nie działa, dale jest to wyświetlane jako referencja zeminna dynamicznie. Jest jakiś inny sposób? Jakaś inna medota na objecie consol.???
deleteBtn.classList.remove('js-curr');
deleteBtn.classList.add('js-del');
deleteBtn.innerText = 'usuń z koszyka';
curr.parentElement.appendChild(deleteBtn);

const siblingsCurr = [...curr.parentElement.children];
// console.log(siblingsCurr); //?dev na HTML Collection - co to jest medtoda item?

for(item = 0; item < siblingsCurr.length; item++) {
    // console.log(siblingsCurr[item].className);
    if(siblingsCurr[item].className !== "article__btn js-curr"){   //infO No co...? Pan się nie dziwi - sam dla siebie bratem nie jest xD hahaha A jakby to zrobić jakbym chciał zapisać tylko fragment tekstu? "(...) js-curr(...)" gdzie (...) oznaczają inne - dowolne ciagi znakó lub ich brak. Jak to zapisać?
        siblingsCurr[item].className += " siblings"; //?dev Ja dam tu kropkę to wtedy ma źle przypisane wartości dla     console.log(siblingsCurr[item].className); A to chyba wynika z tego że pracowaliśmy na tablicy która powstała w oparciu o HTML Collection - tak? Dltego trzeba dać spacje? Tak jak dajemy spacje w getElementByClassName("js-crr ja-del")
    };                                              //?dev Czy wg tutaj na objekcie działałaby petla for? Moglibyśmy jej użyć bez tego przekształcenia - obiekty tablicopodobe - czy po prostu użylibyśmy for in i spoko ?
};

const nextArticleSibling = curr.parentElement.nextElementSibling;
nextArticleSibling.setAttribute('title', 'nextElementSibling')

const endArticleSibling = nextArticleSibling.parentElement.lastChild.previousSibling  //infO analga pomiedzy lastChild a inline
const newParagraf = document.createElement('p');
newParagraf.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo dolorem voluptas doloribus impedit esse assumenda quisquam, nam placeat iure maiores?";
endArticleSibling.insertBefore(newParagraf, endArticleSibling.lastChild.previousSibling);

const newArticle = endArticleSibling.cloneNode(true);  //infO Obecnie false jest wartością domyślną dla tej metody jednak np Firefox 13 tj spec. DOM4 domyślnie jest to true - dlatego lepiej wpisac! 
const elSectionArticles = endArticleSibling.parentElement; 
elSectionArticles.insertBefore(newArticle, elSectionArticles.firstElementChild);

console.log(elSectionArticles);


//_______________Note________________

//*see Porównaj sobie firstElementChild z firstChild
//*see Czym się różni createElement od createElementNS?
//notE  Sam w sobie element.classList jest tylko do odczytu, ale można go mimo to modyfikować poprzez stosowanie metod add() i remove().
//notE firstChild i lastChild - uwzględniają node text - czyli białe znaki html 
