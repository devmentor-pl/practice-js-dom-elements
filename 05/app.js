console.log('DOM');

const curr = document.querySelector('.js-curr');

// 1 dodanie przycisku
const btnReset = document.createElement('button');
btnReset.innerText = "Usuń z koszyka"

const parentEl = curr.parentElement;

parentEl.appendChild(btnReset);

// 2 dodaj klasę .siblings

if (parentEl.hasChildNodes()) {
  const arr = [...parentEl.children];
  arr.forEach(element => {
    if(!element.classList.contains('js-curr'))
    element.classList.add('siblings');
  })
}

// 3 dodaj atrybut title 

const nextArticle = parentEl.nextElementSibling

if(nextArticle) {
  nextArticle.setAttribute('title', 'nextElementSibling')
}

// 4 dodanie paragrafu przed button

const lastArticle = nextArticle.nextElementSibling

if(lastArticle) {
  let paragraph = document.createElement('p');
  const btn = lastArticle.lastElementChild
  console.log(btn)
  paragraph.innerText = "lorem ipsum etc."
  paragraph.classList.add('paragraph--added');
  if(paragraph && btn) {
    lastArticle.insertBefore(paragraph, btn)
  }
  
}

// 5 dodaj kolejny artykuł jako pierwszy

const section = parentEl.parentElement;

if (section) {
  const firstArticle = parentEl.cloneNode(true);
  firstArticle.classList.add('first')
  section.insertBefore(firstArticle, parentEl);
}










