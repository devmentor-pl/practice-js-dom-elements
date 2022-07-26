console.log("DOM");
const aArr = document.querySelectorAll("[data-url");

if (aArr) {
  for (let i = 0; i < aArr.length; i++) {
    const dataUrl = aArr[i].getAttribute("data-url");
    aArr[i].setAttribute("href", dataUrl);
  }
}
