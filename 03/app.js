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
const buttonElement = document.createElement("button");

const parentElement = document.querySelector(".parent-for-button");

parentElement.appendChild(buttonElement);

for (const key in buttonSettings) {
  for (const key2 in buttonSettings[key]) {
    if (key === "attr") {
      buttonElement.setAttribute(key2, buttonSettings[key][key2]);
    } else if (key === "css") {
      buttonElement.style.setProperty(key2, buttonSettings[key][key2]);
    } else if (key === "text") {
      buttonElement.innerText = buttonSettings[key];
    }
  }
}