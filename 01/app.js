console.log('DOM');

const element = document.getElementsByClassName('comments__item comments__item--newest');


if(element.length !==0 ) {
    const childrenWithDataAttribute = element[0].querySelectorAll('[data-info]');
    console.log(childrenWithDataAttribute);
}