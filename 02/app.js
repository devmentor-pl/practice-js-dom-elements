console.log('DOM');

const urlList = document.querySelectorAll('a[data-url]');
urlList.forEach((item) => {
  if (item.hasAttribute('data-url')) {
    const urlValue = item.dataset.url;
    item.setAttribute('href', urlValue);
    console.log(item);
  }
});
