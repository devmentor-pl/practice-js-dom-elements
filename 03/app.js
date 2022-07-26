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
if (btnParent) {
  const btn = document.createElement("button");

  // btn.setAttribute("className", "btn");
  // btn.setAttribute("title", "super button");
  // btn.style.border = "1px solid #336699";
  // btn.style.padding = "5px 20px";
  // btn.style.color = "#444";
  // btn.innerText = "Click me!";

  for (const x in buttonSettings.attr) {
    btn.setAttribute(x, buttonSettings.attr[x]);
  }
  for (const x in buttonSettings.css) {
    btn.style.setProperty(x, buttonSettings.css[x]);
  }
  for (const x in buttonSettings.text) {
    btn.innerText = buttonSettings.text;
  }
  btnParent.appendChild(btn);
}
