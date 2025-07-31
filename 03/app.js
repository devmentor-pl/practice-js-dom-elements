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

const button = document.createElement("button");
button.innerText = buttonSettings.text;

for (const propety in buttonSettings.attr) {
  button.setAttribute(propety, buttonSettings.attr[propety]);
}

for (const propety in buttonSettings.css) {
  button.style[propety] = buttonSettings.css[propety];
}

const parent = document.querySelector(".parent-for-button");
if (parent) parent.appendChild(button);
