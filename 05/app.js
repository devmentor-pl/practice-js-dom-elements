console.log('DOM');

const curr = document.querySelector('.js-curr');


if (curr) {
    const button = document.createElement('button');
    button.innerText = 'usuń z koszyka';
    const parent = curr.parentElement;
    console.log(parent);

    parent.appendChild(button);
    const children = parent.children;
    console.log(children);
    for (let i = 0; i < children.length; i++) {
        console.log(children[i]);
        children[i].classList.add('.siblings');
    }
    const secondSibling = parent.nextElementSibling;
    secondSibling.setAttribute('title', 'nextElementSibling');
    const thirdSibling = secondSibling.nextElementSibling;
    const childrenThird = thirdSibling.children;
    const buttonThird = childrenThird[2];
    console.log(childrenThird);
    const p = childrenThird[1].cloneNode(true);
    thirdSibling.insertBefore(p, buttonThird);
    const lastSibling = parent.cloneNode(true);
    parent.parentElement.insertBefore(lastSibling, parent);
}