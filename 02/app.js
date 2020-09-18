const hasUrlList = document.querySelectorAll("[data-url]");

if (hasUrlList) {
  // Nie zrozumiałam - czy o takie zapisanie wartości atrybutu do zmiennej chodziło? Czy może tylko o tą NodeList wyżej?
  // const link0 = hasUrlList[0].getAttribute('data-url');
  // const link1 = hasUrlList[1].getAttribute('data-url');
  // const link2 = hasUrlList[2].getAttribute('data-url');

  hasUrlList.forEach((item, index) => {
    item.setAttribute('href', hasUrlList[index].getAttribute('data-url'));
  })
}

