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

const parentSectionBtn = document.querySelector(".parent-for-button");
const button = document.createElement("button");

for (key in buttonSettings.attr) {
  button.setAttribute(key, buttonSettings.attr[key]);
}
for (key in buttonSettings.css) {
  button.style[key] = buttonSettings.css[key];
}
button.innerText = buttonSettings.text;

parentSectionBtn.appendChild(button);
