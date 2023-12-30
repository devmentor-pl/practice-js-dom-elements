console.log('DOM');

const curr = document.querySelector('.js-curr');

const button = document.createElement('button');
button.textContent = 'usuń z koszyka';
curr.appendChild(button);

if (curr) {
    const siblings = Array.from(curr.parentNode.children);

    for (const sibling of siblings) {
        if (sibling !== curr) {
            sibling.classList.add('siblings');
        }
    }
}
