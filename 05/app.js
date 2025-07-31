console.log('DOM');

const curr = document.querySelector('.js-curr');

const btn = document.createElement('button');
curr.appendChild(btn);
btn.textContent = 'usuń z koszyka';

const childrenList = [...curr.children];
for(let i=0; i<childrenList.length; i++) {
    childrenList[i].classList.add('siblings'); 
}

const first = document.querySelector('articles__item article');
if(first && first.hasChildNodes) {
    const first = first
    ...
}
//utknąłem tutaj. Nie rozumiem polecenia 3, gdzie powinienem dodać atrybut 'title'. 



