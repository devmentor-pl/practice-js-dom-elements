console.log('DOM');

const curr = document.querySelector('.js-curr');
const currParent = curr.parentElement
// 1. Utwórz kolejny przycisk, który będzie rodzeństwem (bratem) 
// dla elementu ze zmiennej `curr`. 
// Element ten niech zawiera napis `usuń z koszyka`.
const button = document.createElement('button')
button.innerText = 'Usuń z koszyka'
currParent.append(button)

// 2. Do wszystkich elementów, które są rodzeństwem elementu 
// o klasie `.js-curr`, dodaj klasę `.siblings` (wykorzystaj pętlę).
for (const el of [...currParent.children]) {
    !el.className.includes('js-curr') ? el.classList.add('siblings') : false
}

// 3. Do następnego elementu o klasie `.article`,
// który występuje zaraz po rodzicu elementu o klasie `.js-curr`,
// dodaj atrybut `title` o wartości `nextElementSibling`.

currParent.nextElementSibling.setAttribute('title', 'nextElementSibling')

// 4. Do ostatniego artykułu dodaj dodatkowy paragraf i umieść go
// przed znacznikiem `<button/>`.
const p = document.createElement('p')
p.innerText = `nowo stworzony paragraf !`
const lastButton = currParent.parentElement.lastElementChild.querySelector('button')
currParent.parentElement.lastElementChild.insertBefore(p, lastButton)

// 5. Na początku listy dodaj kolejny artykuł,
// który będzie miał tę samą strukturę, co pozostałe artykuły.
const cloneArticle = currParent.cloneNode(true)
currParent.parentElement.insertBefore(cloneArticle, currParent)

