const section = document.querySelector("section");
const button = document.createElement("button");

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

// button.setAttribute("class", buttonSettings.attr.className);
// button.setAttribute("title", buttonSettings.attr.title);
// button.style.border = buttonSettings.css.border;
// button.style.padding = buttonSettings.css.padding;
// button.style.color = buttonSettings.css.color;
// button.innerText = buttonSettings.text;

if (button) {
	for (const el in buttonSettings) {
		if (el === "attr") {
			button.setAttribute("class", buttonSettings[el].className);
			button.setAttribute("title", buttonSettings[el].title);
		} else if (el === "css") {
			button.style.border = buttonSettings[el].border;
			button.style.padding = buttonSettings[el].padding;
			button.style.color = buttonSettings[el].color;
		} else if (el === "text") {
			button.innerText = buttonSettings[el];
		}
	}
}

section.appendChild(button);
