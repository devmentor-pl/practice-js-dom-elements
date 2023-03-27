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
		cursor: 'pointer',
	},
	text: 'Click me!',
};

const parentForBtn = document.querySelector(`.parent-for-button`);
const button = document.createElement('button');

button.classList.add(buttonSettings.attr.className);
button.textContent = buttonSettings.text;
button.setAttribute('title', buttonSettings.attr.title);

const styles = buttonSettings.css;

for (const css in styles) {
	button.style[css] = styles[css];
}

parentForBtn.append(button);
