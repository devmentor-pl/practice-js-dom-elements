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

const sectionElem = document.querySelector('.parent-for-button');
const btnElement = document.createElement('button');

for (const attrKeys in buttonSettings.attr) {
	btnElement.setAttribute(attrKeys, buttonSettings.attr[attrKeys]);
}
for (const cssKeys in buttonSettings.css) {
	btnElement.style[cssKeys] = buttonSettings.css[cssKeys];
}
btnElement.textContent = buttonSettings.text;

sectionElem.appendChild(btnElement);
