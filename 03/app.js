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

const newButton = document.createElement("button");
const parentForButton = document.querySelector(".parent-for-button");
console.log(parentForButton);

if (newButton) {
  for (const set in buttonSettings) {
    if (typeof buttonSettings[set] === "string") {
      newButton.innerHTML = buttonSettings[set];
    }
    for (const setting in buttonSettings[set]) {
      if (set === "attr") {
        newButton.setAttribute(setting, buttonSettings.attr[setting]);
      } else {
        newButton.style[setting] = buttonSettings.css[setting];
      }
    }
  }
}

console.log(newButton);
parentForButton.appendChild(newButton);
