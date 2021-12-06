console.log('DOM');

const curr = document.querySelector('.js-curr');

if(curr) {
    const parentCurr = curr.parentElement;
    const cloneCurr = curr.cloneNode(false);
    const clonedBtn = parentCurr.appendChild(cloneCurr);
    clonedBtn.textContent = "Usun z koszyka";
    const allChildren = parentCurr.children;
    const childrenArray = Array.from(allChildren);
    childrenArray.forEach(element => {
        element.className = 'sibilings';
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

