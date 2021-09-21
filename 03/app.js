const buttonSettings = {
	attr: {
		className: 'btn',
		title: 'super button',
	},
	css: {
		border: '3px solid #336699',
		padding: '15px 20px',
		color: '#444',
	},
	text: 'Click me!',
};

const sectionParent = document.querySelector('.parent-for-button');

const btn = document.createElement('button');

btn.setAttribute('class', buttonSettings.attr.className);
btn.setAttribute('title', buttonSettings.attr.title);

for (const item in buttonSettings.css) {
	btn.style[item] = buttonSettings.css[item];
	btn.style[item] = buttonSettings.css[item];
	btn.style[item] = buttonSettings.css[item];
}

btn.innerText = buttonSettings.text;
sectionParent.appendChild(btn);
