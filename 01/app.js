
const liElement = document.querySelector('.comments__item.comments__item--newest');
const dataInfoList = liElement.querySelectorAll('[data-info]');

if(liElement && dataInfoList) {
    console.log(`Znaleziono ${dataInfoList.length} poniższe elementy z atrybutem  data-info :`);

    dataInfoList.forEach(function(element) {
        console.log(element)
    });
}