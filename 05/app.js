console.log('DOM');

if(document.querySelector('.js-curr')) {
    const parentCurr = document.querySelector('.js-curr').parentElement;
    const cloneCurr = document.querySelector('.js-curr').cloneNode(false);
    const clonedBtn = parentCurr.appendChild(cloneCurr);
    clonedBtn.textContent = "Usun z koszyka";
    const allChildren = parentCurr.children;
    const childrenArray = Array.from(allChildren);
    childrenArray.forEach(element => {
        element.classList.add = 'sibilings';
    });
    const parentSibiling = parentCurr.nextElementSibling;
    parentSibiling.setAttribute('title', 'nextElementSibiling');
    const lastSibiling = parentSibiling.nextElementSibling;
    if(lastSibiling.hasChildNodes()) {
        const lastButton = lastSibiling.lastElementChild;
        const newPara = document.createElement('p');
        newPara.innerText = 'To jest tekst nowego paragrafu';
        lastSibiling.insertBefore( newPara, lastButton);
    }
    const parentAll = parentSibiling.parentElement;
    const newSection = parentSibiling.cloneNode(true);
    parentAll.insertBefore(newSection, parentCurr);

}

