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
    
	for (const key in buttonSettings) {
		if (key === 'attr') {
			for (const attrName in buttonSettings.attr) {
				button[attrName] = buttonSettings.attr[attrName];
			}
		} else if (key === 'css') {
			for (const styleName in buttonSettings.css) {
				button.style[styleName] = buttonSettings.css[styleName];
			}
		} else if (key === 'text') {
			button.textContent = buttonSettings.text;
		}
	}

	btnParent.appendChild(button);
}
