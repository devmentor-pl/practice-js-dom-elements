console.log('DOM');

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

const section = document.querySelector('.parent-for-button');

const btn = document.createElement('button');
for (const prop in buttonSettings.attr) {
	btn.setAttribute(prop, buttonSettings.attr[prop]);
}
for (const prop in buttonSettings.css) {
	btn.style[prop] = buttonSettings.css[prop];
}
btn.innerText = buttonSettings.text;
section.appendChild(btn);
