console.log('DOM');

const curr = document.querySelector('.js-curr');

const parent = curr.parentElement;
const parentChildrenList = parent.children;
const parentSibling = parent.nextElementSibling;
const parentOfParent = parent.parentElement;
const lastParent0fParentChild = parentOfParent.lastElementChild;
const lastParent0fParentChildButton = lastParent0fParentChild.lastElementChild;

const newBtn = document.createElement('button');
const newP = document.createElement('p');
newP.innerText = "Lorem Ipsum";
newBtn.innerText = 'Usuń z koszyka';

parent.appendChild(newBtn);

for (const child of parentChildrenList) {
  if (child !== curr) {
    child.classList.add("siblings");
  };
};

parentSibling.setAttribute('title', 'nextElementSibling');

lastParent0fParentChild.insertBefore(newP, lastParent0fParentChildButton);


createArticle();

function createArticle(title = "Default Title") {

  const articleStructure = {
    className: "articles__item article",
    content: {
      h1: {
        className: "article__title",
        text: title,
      },
      p: {
        className: "article__description",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.",
      },
      button: {
        className: "article__btn",
        text: "Kupuję!",
      },
    },
  };


  const newArticle = document.createElement("article");

  newArticle.className = articleStructure.className;

  for (const key in articleStructure.content) {
    const newProp = document.createElement(key);

    for (const e in articleStructure.content[key]) {
      if (e === "className") {
        newProp.className = articleStructure.content[key][e];
      } else {
        newProp.innerText = articleStructure.content[key][e];
      }
    }

    newArticle.appendChild(newProp);
  };

  parentOfParent.insertBefore(newArticle, parentOfParent.firstElementChild);
};