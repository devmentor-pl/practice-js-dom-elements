console.log('DOM');
const targetElement = document.querySelector('.comments__item.comments__item--newest');
if (targetElement) {
    const elementsWithDataInfo = targetElement.querySelectorAll('[data-info]');

    
    elementsWithDataInfo.forEach(element => {
        console.log(element);
        
    });
} else {
    console.log('cant find elements');
}

//* znaleziono 3x elementy posiadające atrybut data-info (dolor, Lorem, adipisicing *//

/* W przykładzie użyłem pętli forEach, aby przejść przez wszystkie znalezione elementy spełniające warunek (posiadające atrybut data-info). 
forEach jest wygodną metodą do iteracji po elementach tablicopodobnych struktur danych, takich jak wynik zastosowania querySelectorAll do zbioru elementów.

Ten sam kod z użyciem pętli for:

for (let i = 0; i < elementsWithDataInfo.length; i++) {
    const element = elementsWithDataInfo[i];
    console.log(element);
    
}

W praktyce wybór między forEach a pętlą for zależy od preferencji programisty
*/

