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

const btnParent = document.querySelector(".parent-for-button");

const btn = document.createElement("button");
for (const setting in buttonSettings) {
  switch (setting) {
    case "attr":
      for (const [key, value] of Object.entries(buttonSettings[setting])) {
        if (key === "className") {
          btn.classList.add(value);
        } else {
          btn.setAttribute(key, value);
        }
      }
      break;
    case "css":
      for (const [key, value] of Object.entries(buttonSettings[setting])) {
        btn.style[key] = value;
      }
      break;
    case "text":
      btn.innerHTML = buttonSettings[setting];
      break;
  }
}

if (btnParent) btnParent.insertAdjacentElement("afterbegin", btn);
