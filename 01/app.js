console.log('DOM');

const liEl = document.querySelector('.comments__item.comments__item--newest');


if (liEl) {

    const dataEl = liEl.querySelectorAll("[data-info]");
    console.log(dataEl.length);
}
