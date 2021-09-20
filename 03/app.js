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

const sectionParent = document.querySelector('.parent-for-button');

const btn = document.createElement('button');

btn.setAttribute('class', buttonSettings.attr.className);
btn.setAttribute('title', buttonSettings.attr.title);

for (const item in buttonSettings.css) {
	btn.style.border = item;
	btn.style.padding = item;
	btn.style.color = item;

	btn.innerText = buttonSettings.text;
}

sectionParent.appendChild(btn);
