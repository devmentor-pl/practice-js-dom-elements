console.log('DOM');

const mainElement = document.querySelector('.comments__item.comments__item--newest');

if(mainElement){
    const spanList = mainElement.querySelectorAll('p > span');
    const dataInfoList = [];
        if(spanList){
        spanList.forEach(function(element){
            if(element.hasAttribute('data-info')){
                dataInfoList.push(element);
            }
        })
    }
    console.log('Ilosc elementow, ktore posidaja atrybut data-info to: ' + dataInfoList.length);
}
