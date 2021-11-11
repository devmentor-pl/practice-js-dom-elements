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

const sectionElement = document.querySelector(".parent-for-button");

if (sectionElement) {
  const btn = document.createElement("button");
  //    class&title
  btn.classList.add(buttonSettings["attr"]["className"]);
  btn.setAttribute("title", buttonSettings["attr"]["title"]);

  //    styles
  btn.style.border = buttonSettings["css"]["border"];
  btn.style.padding = buttonSettings["css"]["padding"];
  btn.style.color = buttonSettings["css"]["color"];

  //    btn content
  btn.innerText = buttonSettings["text"];

  //    append
  sectionElement.appendChild(btn);
}

console.log(sectionElement);
