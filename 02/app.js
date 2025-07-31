const linksWithDataAtt = document.querySelectorAll("a[data-url]");

const linksArr = [...linksWithDataAtt];

const linksValue = linksArr.forEach(function (element, index) {
  let link = element.dataset.url;
  element.setAttribute("href", link);
});
