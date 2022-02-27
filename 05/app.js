console.log('DOM');

const curr = document.querySelector('.js-curr');

//1 
if(curr) {
    const deleteButton = document.createElement('button');
    
    deleteButton.innerText  = 'usuń z koszyka'

    const currParent = curr.parentElement
    currParent.appendChild( deleteButton );
//2 
    const currParChildren = currParent.children
    const arrCh = Array.from(currParChildren)
    arrCh.forEach(function(element) {
        if(element.className !== 'js-curr')
            element.classList.add('siblings')
    })
//3
    const secondArticle = currParent.nextElementSibling
    secondArticle.setAttribute('title','nextElementSibling')
//4
    const lastArticle = secondArticle.nextElementSibling
    const lastButton = lastArticle.lastElementChild
    const newP = document.createElement('p')
    newP.innerText = 'Nowy lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam?'
    lastArticle.insertBefore(newP, lastButton)
//5
    const newArticle = secondArticle.cloneNode(true)
    const articleParent = currParent.parentElement
    articleParent.insertBefore(newArticle, currParent)
}





    


