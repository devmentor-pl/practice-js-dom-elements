console.log('DOM');

const curr = document.querySelector('.js-curr');



// 1. 
if(curr){
const btn2 = document.createElement("button");
curr.parentElement.appendChild(btn2);
btn2.textContent = "Usuń z koszyka";
}


// 2. 

const currParent = curr.parentElement
const currParentChildren = currParent.children;
const currParentArray = Array.from(currParentChildren);
currParentArray.forEach(function (element) {
  element.classList.add("siblings");
});

// 3. 

const secondArticle = currParent.nextElementSibling;
secondArticle.setAttribute("title", "nextElementSibling");

// 4.

const articleParent = currParent.parentElement;
const lastArticle = articleParent.lastElementChild;
const btn3 = lastArticle.lastElementChild;
const colnebtn3 = btn3.cloneNode(true)
lastArticle.appendChild(colnebtn3)
console.log(btn3)
const paragraph = document.createElement("p")
paragraph.textContent = "to jest nowy Paragraf"
lastArticle.replaceChild(paragraph,btn3)

// 5.

const firstArticle = currParent.cloneNode(true)
articleParent.insertBefore(firstArticle, currParent);







