const dataList = document.querySelectorAll('a[data-url]');
dataList.forEach(el => {
    const urlValue = el.getAttribute('data-url');
    el.setAttribute('href', urlValue);
});