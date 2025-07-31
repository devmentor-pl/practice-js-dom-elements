console.log("DOM");

const buttonSettings = {
  attr: {
    className: "btn",
    title: "super button",
  },
  css: {
    border: "10px solid #336699",
    padding: "5px 20px",
    color: "#444",
  },
  text: "Click me!",
};

const btnElement = document.createElement("BUTTON");

for (const key in buttonSettings.attr) {
  btnElement[key] = buttonSettings.attr[key];
}

for (const key in buttonSettings.css) {
  btnElement.style[key] = buttonSettings.css[key];
}

btnElement.textContent = buttonSettings.text;

const parent = document.querySelector(".parent-for-button");

if (parent) {
  parent.appendChild(btnElement);
}
