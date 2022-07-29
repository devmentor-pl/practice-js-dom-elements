console.log('DOM');

const commentsEl = document.querySelector('.comments__item.comments__item--newest');

if (commentsEl) {
    const elWithAttr = commentsEl.querySelectorAll('[data-info]')
    console.log(elWithAttr.length)
}
