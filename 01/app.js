const itemElement = [...document.getElementsByClassName('comments__item comments__item--newest')]; 
//dlaczego nie działa z takim zapisem: const commentsItemNewestList = document.getElementsByClassName('.comments__item.comments__item--newest'); 
if (itemElement) {
    itemElement.forEach(function (element) {
        const dataInfoList = element.querySelectorAll('[data-info]');
        console.log(`Ilość znalezionych elementów [data-info]: ${dataInfoList.length}`)
    });
}