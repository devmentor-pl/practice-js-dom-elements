console.log('DOM');

const dataUrl = document.querySelectorAll('a[data-url]');
datalist = [...dataUrl];
const urls = datalist.map(data => data.dataset.url);

const addAttribute = (data, index) => data.setAttribute(`href`,`${urls[index]}`);
dataUrl.forEach(addAttribute);
