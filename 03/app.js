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
const btn = document.createElement("button");

for (const key in buttonSettings) {
  if (Object.prototype.hasOwnProperty.call(buttonSettings, key)) {
    const element = buttonSettings[key];
    if (key === "attr") {
      btn.className = element.className;
      btn.title = element.title;
    } else if (key === "css") {
      btn.style = element;
    } else {
      btn.textContent = element;
    }
  }
}

document.querySelector(".parent-for-button").appendChild(btn);
