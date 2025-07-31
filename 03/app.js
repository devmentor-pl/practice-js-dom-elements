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
const section = document.querySelector(".parent-for-button");
const button = document.createElement("button");
section.appendChild(button);

for (const key in buttonSettings) {
  if (Object.hasOwnProperty.call(buttonSettings, key)) {
    const element = buttonSettings[key];
    if (key === "attr") {
      for (const property in element) {
        button.setAttribute(property, element[property]);
      }
    } else if (key === "css") {
      const element = buttonSettings[key];
      for (const property in element) {
        button.style.setProperty(property, element[property]);
      }
    }
    button.textContent = buttonSettings.text;
  }
}
