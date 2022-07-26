console.log("DOM");

const curr = document.querySelector(".js-curr");

if (curr) {
  const btn = document.createElement("button");
  curr.parentElement.appendChild(btn);
  btn.innerText = "Usuń z koszyka";

  const parent = curr.parentElement;
  if (parent.hasChildNodes()) {
    const children = parent.children;
    const childrenArr = [...children];
    for (let i = 0; i < childrenArr.length; i++) {
      if (childrenArr[i] !== curr) {
        childrenArr[i].classList.add("siblings");
      }
    }
  }

  const nextElSibling = curr.parentElement.nextElementSibling;
  nextElSibling.setAttribute("title", "nextElementSibling");

  const lastParent = nextElSibling.nextElementSibling;
  const btnSibling = lastParent.lastElementChild;
  const p = document.createElement("p");
  lastParent.insertBefore(p, btnSibling);

  const sectionEl = curr.parentElement.parentElement;
  const cloneArticle = parent.cloneNode(true);
  console.log(cloneArticle);
  sectionEl.insertBefore(cloneArticle, parent);
}
