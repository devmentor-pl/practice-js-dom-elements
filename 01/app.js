//?dev Czy ten zapis dałoby się jakoś skrócić? Czy w nawiasie tej metody możemy jakoś zapisać dwie klasy jednoczenie? W querySelector by przeszło ale to działa szybciej. 
const elCommentsNewest = document.getElementsByClassName('comments__item comments__item--newest');
console.log(elCommentsNewest);


const hasDataInfo = elCommentsNewest.hasAttribute('data-info');
console.log(hasDataInfo);
//notE Chyba źle to robie bo robie to na rodzicu a to jest w dzieciach ? 

//?dev Nie wiem czemu się to nie chce wyświetlić 
const datasetInfo = elCommentsNewest.dataset.info;
console.log(datasetInfo);
console.log(elCommentsNewest.dataset.info);











// const elCommentsNewest = document.querySelectorAll('.comments__item.comments__item--newest');
// console.log(elCommentsNewest);

// const datasetInfo = elCommentsNewest.dataset.info;
// console.log(datasetInfo);