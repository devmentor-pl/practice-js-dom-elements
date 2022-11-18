console.log('DOM');

const pEl = document.querySelector('.comments__item.comments__item--newest');

console.log(pEl);

const data = pEl.querySelectorAll('[data-info]');

data.forEach(function(element, index) {
    element.textContent = data[index];
});

console.log(data.length);