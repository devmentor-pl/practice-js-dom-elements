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

const button = document.createElement("button");

for (const key in buttonSettings.attr) {
	button.setAttribute(key, buttonSettings.attr[key]);
	console.log(button);
}

for (const key in buttonSettings.css) {
	button.setAttribute(key, buttonSettings.css[key]);
	console.log(button);
}

button.innerText = buttonSettings["text"];

console.log(button);

const parentElement = document.querySelector(".parent-for-button");

parentElement.appendChild(button);
