const commentsItemNewestList = document.querySelectorAll('.comments__item.comments__item--newest');

commentsItemNewestList.forEach(function (element) {
    const dataInfoList = element.querySelectorAll('[data-info]');
    console.log(`liczba znaczników z atrybutem [data-info]: ${dataInfoList.length}`)
})

//  ---------rozwiązanie z getElementsByClassName--------- 

// const commentsItemNewestList = [...document.getElementsByClassName('comments__item comments__item--newest')]; 
// if (commentsItemNewestList) {
//     commentsItemNewestList.forEach(function (element) {
//         const dataInfoList = element.querySelectorAll('[data-info]');
//         console.log(`liczba znaczników z atrybutem [data-info]: ${dataInfoList.length}`)
//     });
// }