console.log('DOM');

const curr = document.querySelector('.js-curr');

const deleteButton = document.createElement('button')
deleteButton.textContent = 'usuń z koszyka'
curr.insertAdjacentElement('afterend', deleteButton)

curr.parentNode.childNodes.forEach(element => {
	element.classList && ![...element.classList].includes('js-curr') && element.classList.add("siblings");
});

curr.parentElement.nextElementSibling.setAttribute('title', 'nextElementSibling');

const newPElement = document.createElement('p')
newPElement.textContent = 'To jest nowy paragraf.'

curr.parentElement.parentElement.lastElementChild.querySelector('.article__btn').insertAdjacentElement('beforebegin', newPElement);

const newArticleElement = curr.parentElement.nextElementSibling.cloneNode(true);
newArticleElement.querySelector('.article__title').textContent = 'To jest nowy artykuł!'
newArticleElement.querySelector('.article__description').textContent = 'To jest treść nowego artykułu!'

curr.parentElement.parentElement.prepend(newArticleElement);
