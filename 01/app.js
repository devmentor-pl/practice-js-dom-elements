console.log('DOM');
const doubleClass = document.querySelector('.comments__item.comments__item--newest');
if(doubleClass) {
    const dataInfo = doubleClass.querySelectorAll('[data-info]');
    console.log(`Znaleziono: ${dataInfo.length} elementy`)
}
else {
    console.log("nie znaleziono elementu");
}