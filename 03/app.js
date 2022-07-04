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
	for (const el in buttonSettings.attr) {
		const attribute = buttonSettings.attr[el];
		button[el] = attribute;
	}
	for (const el in buttonSettings.css) {
		const css = buttonSettings.css[el];
		button.style[el] = css;
	}
	button.innerHTML = buttonSettings.text;
}

section.appendChild(button);
