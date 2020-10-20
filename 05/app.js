console.log('DOM');

const curr = document.querySelector('.js-curr');
const sib = document.createElement('button');
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
insertAfter(sib, curr);
sib.innerHTML = `usuń z koszyka`;
var getSiblings = function (elem) {

	var siblings = [];
	var sibling = elem.parentNode.firstChild;

	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling
	}

	return siblings;

};
getSiblings(curr).forEach(function (element) {
    element.classList.add("siblings");

})
const x = curr.parentNode.nextElementSibling;
const att = x.setAttribute("title", "nextElementSibling");
const y = x.nextElementSibling;
const z = x.parentNode;
const paragraph = document.createElement('p');
const c = curr.parentNode;
y.appendChild(paragraph);
function moveChoiceTo(elem_choice, direction) {

    var span = elem_choice.parentNode;

    if (direction === -1 && span.previousElementSibling) {
        span.insertBefore(elem_choice, elem_choice.previousElementSibling);
    } else if (direction === 1 && span.nextElementSibling) {
        span.insertBefore(elem_choice, elem_choice.nextElementSibling.nextElementSibling)
    }
}
moveChoiceTo(paragraph, -1);
let clonedNode = c.cloneNode(true);
const d = c.parentNode;
d.appendChild(clonedNode);
d.prepend(clonedNode);
