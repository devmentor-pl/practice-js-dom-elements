console.log("DOM");

const parent = document.querySelector(".parent-for-button");

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

const button = document.createElement("button");

for (const key in buttonSettings.attr) {
  button.setAttribute(key, buttonSettings.attr[key]);
}

for (const key in buttonSettings.css) {
  button.style[key] = buttonSettings.css[key];
}

button.textContent = buttonSettings.text;

parent.appendChild(button);
