console.log('DOM');

// I sposób

const navSection = document.querySelector('nav');
const newUlSection = document.createElement('ul');

const urlArray = ['/', '/gallery', '/contact'];
const itemUrlArray = urlArray.values(); //Metoda values() zwraca nowy obiekt Array Item , który zawiera wartości dla każdego indeksu w tablicy.

const textArray = ['start','galeria','kontakt'];
const itemTextArray = textArray.values();

if(navSection){
    navSection.appendChild(newUlSection);

    for(let i=0; i<3; i++){
        const newLiSection = document.createElement('li');
        const newASection = document.createElement('a');
        newUlSection.appendChild(newLiSection).appendChild(newASection);
    }
}
const AList = document.querySelectorAll('a');
AList.forEach(function(element){
    element.setAttribute('href',itemUrlArray.next().value);
    element.innerHTML = itemTextArray.next().value;
})

console.log(AList);





