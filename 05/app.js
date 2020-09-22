const curr = document.querySelector('.js-curr');

if (curr) {
  // utwórz kolejny przycisk, który będzie rodzeństwem (bratem) curr.
  const broBtn = curr.cloneNode(true);
  broBtn.className = 'article__btn';
  broBtn.innerText = 'Usuń z koszyka';
  curr.parentElement.appendChild(broBtn);

  // dla wszystkich elementów, które są rodzeństwem dla elementu o klasie .js-curr dodaj klasę .siblings (wykorzystaj pętlę)
  const children = Array.from(curr.parentElement.children);

  for (let sibling of children) {
    if (!sibling.className.includes('js-curr')) {
      sibling.classList.add('siblings');
    }
  }
  // dla następnego elementu o klasie .article względem rodzica dla elementu o klasie .js-curr dodaj atrybut title o wartości nextElementSibling
  curr.parentElement.nextElementSibling.setAttribute('title', 'nextElementSibling');

  // do ostatniego artykułu dodaj dodatkowy paragraf i umieść go przed znacznikiem <button/>
  const newPEl = document.createElement('p');
  newPEl.innerText = '====>>> This is a new paragraph.';
  const section = curr.parentElement.parentElement;
  const lastBtn = section.lastElementChild.querySelector('button');
  section.lastElementChild.insertBefore(newPEl, lastBtn);

  // dodaj kolejny artykuł do listy (jako pierwszy), który będzie miał tą samą strukturę co pozostałe artykuły.
  const pureArt = section.querySelector('article:nth-child(2)');
  const newArt = pureArt.cloneNode(true);
  newArt.querySelector('h1').innerText = 'Sample Article Title';
  newArt.querySelector('p').innerText = 'Sample text for the content';
  section.insertBefore(newArt, section.querySelector(':first-child'))
}


