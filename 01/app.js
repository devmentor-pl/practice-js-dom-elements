console.log('DOM');

const comments = document.querySelectorAll(
    '.comments__item, .comments__item-newest'
);

const attrToFind = '[data-info]';

comments.forEach(commentElement => {
    const dataInfoElements = commentElement.querySelectorAll(attrToFind);
    console.log(
        `Znaleziono ${dataInfoElements.length} elementów z atrybutem ${attrToFind}`
    );
});
