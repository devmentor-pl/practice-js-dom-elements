const comment = document.querySelector('.comments__item.comments__item--newest');
if (comment) {
    const elementList = comment.querySelectorAll('[data-info]');
    console.log(`Znaleziono ${[...elementList].length} znaczniki posiadające atrybut 'data-info'.`);
}

