console.log('DOM');

const buttonSettings = {
	attr: {
		className: 'btn',
		title: 'super button'
	},
	css: {
		border: '1px solid #336699',
		padding: '5px 20px',
		color: '$444'
	},
	text: 'Click me!'
};

let field = document.querySelector('.parent-for-button');
let button = document.createElement('button');

for (let option in buttonSettings) {
	switch (option) {
		case 'attr':
			for (let attr in buttonSettings.attr) {
				switch (attr) {
					case 'className':
						button.classList.add(buttonSettings.attr[attr]);
						break;
					case 'title':
						button.title = buttonSettings.attr[attr];
						break;
					default:
						break;
				}
			}
			break;
		case 'css':
			for (let css in buttonSettings.css) {
				button.style[css] = buttonSettings.css[css];
			}
			break;
		case 'text':
			button.innerText = buttonSettings.text;
			break;
		default:
			console.log(`Sorry, we are out of ${option}.`);
	}
}

field.appendChild(button);
