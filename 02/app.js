console.log('DOM');

const urlList = document.querySelectorAll('a[data-url]');
if (urlList.length > 0) {
  urlList.forEach((item) => {
    if (item.hasAttribute('data-url')) {
      const urlValue = item.dataset.url;
      item.setAttribute('href', urlValue);
      console.log(item);
    }
  });
}
