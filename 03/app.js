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

const section = document.querySelector(".parent-for-button");
section.append(btn);

for (const property in buttonSettings) {
	console.log(`${property}: ${buttonSettings[property]}`);
}
for (const property in buttonSettings.attr) {
	btn[property] = buttonSettings.attr[property]
}


btn.textContent = "Click me!";

// btn.style.padding = "5px 20px";
// btn.style.border = "1px solid #336699";
// btn.style.color = "#444";

for (const property in buttonSettings.css) {
	btn.style[property] = buttonSettings.css[property]
	console.log(`${property}: ${buttonSettings.css[property]}`);
}
// btn.setAttribute("class", "btn");
// btn.setAttribute("title", "super button");
// btn.className = 'btn'
// btn.title = 'super button'