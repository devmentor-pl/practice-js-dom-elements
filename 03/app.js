console.log('DOM')

const buttonSettings = {
	attr: {
		className: 'btn',
		title: 'super button',
	},
	css: {
		border: '1px solid #336699',
		padding: '5px 20px',
		color: '#444',
	},
	text: 'Click me!',
}

const parentForButton = document.querySelector('.parent-for-button')
const button = document.createElement('button')

// // for (const [key, value] of Object.entries(buttonSettings)) {
// // 	console.log(value)
// // }

// for (const key in buttonSettings) {
// 	const attr = buttonSettings[key]
// 	console.log(attr)
// }

// console.log(button)
// if (parentForButton) {
// 	const button = document.createElement('button')
// 	parentForButton.appendChild(button)
// }

// for (const [key, value] of Object.entries(buttonSettings)) {
// 	button.setAttribute(key, value)
// 	//
// 	//
// }

for (let key in buttonSettings.attr) {
	button.setAttribute(key, buttonSettings.attr[key])
}

for (let key in buttonSettings.css) {
	button.style[key] = buttonSettings.css[key]
}
// Object.assign(button.style, buttonSettings.css)

button.textContent = buttonSettings.text
parentForButton.appendChild(button)
console.log(button)
