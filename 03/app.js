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

const parent = document.querySelector(".parent-for-button");

if (parent) {
  const button = document.createElement("button");

  for (let key in buttonSettings) {
    switch (key) {
      case "attr":
        const attributes = buttonSettings[key];

        for (let attr in attributes) {
          const attrValue = attributes[attr];

          switch (attr) {
            case "className":
              button.classList.add(attrValue);
              break;
            case "title":
              button.setAttribute(attr, attrValue);
              break;
          }
        }
        break;
      case "css":
        const styles = buttonSettings[key];

        for (let style in styles) {
          button.style[style] = styles[style];
        }

        break;
      case "text":
        button.innerText = buttonSettings[key];

        break;
    }
  }

  parent.appendChild(button);
}
