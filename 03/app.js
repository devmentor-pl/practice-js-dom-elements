const buttonSettings = {
  attr: {
    className: "btn",
    title: "super button",
  },
  css: {
    border: "1px solid #336699",
    padding: "5px 20px",
    color: "#444",
  },
  text: "Click me!",
};

const sectionEl = document.querySelector(".parent-for-button");
if (sectionEl) {
  const btnEl = document.createElement("button");
  sectionEl.appendChild(btnEl);

  for (let el in buttonSettings.attr) {
    btnEl.setAttribute(el, buttonSettings.attr[el]);
  }
  for (let el in buttonSettings.css) {
    btnEl.style[el] = buttonSettings.css[el];
  }
  btnEl.innerText = buttonSettings.text;
}
