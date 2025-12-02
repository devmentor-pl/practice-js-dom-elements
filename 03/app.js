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

const buttonParent = document.querySelector(".parent-for-button");
const btn = document.createElement("button");
const buttonText = document.createTextNode(buttonSettings.text);
buttonParent.appendChild(btn);

if (btn) {
  btn.appendChild(buttonText);
  for (const property in buttonSettings.attr) {
    btn.setAttribute(property, buttonSettings.attr[property]);
  }

  for (const cssProperty in buttonSettings.css) {
    console.log(cssProperty);
    btn.style.setProperty(cssProperty, buttonSettings.css[cssProperty]);
  }
}
