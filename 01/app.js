console.log('DOM');

const liEl = document.querySelector('.comments__item.comments__item--newest');

if (liEl) {
    const liElAttribute = liEl.querySelectorAll('[data-info]');

    if (liElAttribute) {
        console.log(liElAttribute.length);
    }
}