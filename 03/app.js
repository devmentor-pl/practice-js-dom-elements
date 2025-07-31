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

const parentForBtn = document.querySelector('.parent-for-button')
const btn = document.createElement('button')

for (const key in buttonSettings.attr) {
	const value = buttonSettings.attr[key]
	btn[key] = value
}
for (const key in buttonSettings.css) {
	const value = buttonSettings.css[key]
	btn.style[key] = value
}
btn.innerText = buttonSettings.text
parentForBtn.appendChild(btn)