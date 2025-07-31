let allDataList = [];
const allCommentsList = document.querySelectorAll('.comments__item' && '.comments__item--newest');
allCommentsList.forEach(function(element){
    count = element.querySelectorAll('[data-info]').length;
    allDataList = element.querySelectorAll('[data-info]');
    });

console.log(allCommentsList);
console.log(allDataList);
console.log('Znaleziono '+allDataList.length+' elementów z atrybutem data-info');