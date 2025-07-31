console.log("DOM");

const linkList = document.querySelectorAll("a[data-url]");
console.log(linkList);
if (linkList) {
  linkList.forEach(function (link) {
    const url = link.getAttribute("data-url");
    link.setAttribute("href", url);
    console.log(link);
  });
}
