console.log('DOM');

const searchedElement = document.querySelectorAll(".comments__item.comments__item--newest");
const numberOfElements = [...searchedElement].length

switch (numberOfElements) {
    case 0:
        alert("Brak elementów")
        break;

    case 1:
        let elementsWithAtt = searchedElement[0].querySelectorAll("[data-info]").length
        console.log(`Jest ${elementsWithAtt} elementów z atrybutem "data-info"`)
        break;

    default:
        alert(`Elementów zawierających obie klasy ("comments__item" oraz "comments__item--newest") jest więcej niż jeden`)
}





