console.log("DOM");

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

//console.log(buttonSettings.attr.className);
//console.log(buttonSettings["attr"]["className"]);
const buttonParent = document.querySelector(".parent-for-button");
const button = document.createElement("button");

if (buttonParent) {
  buttonParent.appendChild(button);

  for (const key in buttonSettings) {
    button.textContent = buttonSettings[key];

    for (const key in buttonSettings.attr) {
      button.setAttribute(key, buttonSettings.attr[key]);
    }
    for (const key in buttonSettings.css) {
      button.style.setProperty(key, buttonSettings.css[key]);
    }
  }
}

console.log(button);
