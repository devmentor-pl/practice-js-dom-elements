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
    const object2 = buttonSettings[key];

    if (key === "attr") {
      for (const key in object2) {
        button.setAttribute(key, object2[key]);
      }
    } else if (key === "css") {
      for (const key in object2) {
        const str = String(object2[key]);
        console.log(str);
        button.style.setProperty(key, str);
      }
    } else if (key === "text") {
      button.textContent = buttonSettings[key];
    }
  }
}

console.log(button);
