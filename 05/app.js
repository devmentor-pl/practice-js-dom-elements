console.log('DOM');

const curr = document.querySelector('.js-curr');

if(curr) {
    // Dodaj przycisk
    const sectionElement = curr.parentElement;
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Usun z koszyka';
    sectionElement.appendChild(delBtn);

    // DOdaj klase .siblings
    if(sectionElement.hasChildNodes()) {
        const childrenElement = sectionElement.children;
        const arrayChildrenElement = [...childrenElement];
        arrayChildrenElement.forEach(element => {
            element.classList.add("siblings")
        });
    }

    // Dodaj attrybut title
    const articleSection = sectionElement.nextElementSibling;
    articleSection.setAttribute('title', 'nextElementSibling');

    // Dodaj paragraf przed button.
    const paragraph = document.createElement('p');
    paragraph.innerText = 'New Paragraph';
    const articleLast = articleSection.parentElement.lastElementChild;
    const articleBtn =  articleLast.querySelector('button');
    articleLast.insertBefore(paragraph, articleBtn);


    // Dodaj kolejny artykul do listy.
    const cloneElement = sectionElement.cloneNode(true);
    sectionElement.parentElement.insertBefore(cloneElement, sectionElement);

}