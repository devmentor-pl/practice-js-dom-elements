// console.log('DOM');

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
const section1 = document.querySelector('.parent-for-button')
section1.appendChild(newButton)

for (let key in buttonSettings.attr) {
    // console.log(key, buttonSettings.attr[key]);
    newButton.setAttribute(key, buttonSettings.attr[key])
}


// console.log(newButton);

for (let key in buttonSettings.css) {
    // console.log(key);
    // console.log(buttonSettings.css[key]);
    const value = buttonSettings.css[key]
    
    newButton.style[key] = value
}

// console.log(buttonSettings.text);
newButton.textContent = buttonSettings.text;








