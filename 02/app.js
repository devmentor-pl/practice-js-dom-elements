console.log("DOM");

const dataUrlList = document.querySelectorAll("a");
if (dataUrlList) {
  const dataUrlArr = Array.from(dataUrlList);
  dataUrlArr.forEach((el) => {
    if (el.dataset.url) {
      const url = el.dataset.url;
      el.setAttribute("href", url);
    }
  });
}
