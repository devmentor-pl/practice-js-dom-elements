// console.log('DOM');

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
};

const btnParent = document.querySelector('.parent-for-button');

if (btnParent) {
	const button = document.createElement('button');

	for (const key in buttonSettings.attr) {
		button[key] = buttonSettings.attr[key];
	}

	for (const key in buttonSettings.css) {
		button.style[key] = buttonSettings.css[key];
	}

	button.textContent = buttonSettings.text;

	btnParent.appendChild(button);
}
