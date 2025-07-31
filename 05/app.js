console.log('DOM');

const curr = document.querySelector('.js-curr');
//1
const button=document.createElement('button')
button.innerText='usun z koszyka'
curr.parentElement.appendChild(button)
//2
const all =[...curr.parentElement.children]
console.log(all)
all.forEach(element => {
if(element !==curr){
    element.classList.add('siblings')
}
    
    console.log(element)
});
//3
const article=curr.parentElement.nextElementSibling
article.setAttribute('tittle','nextElementSibling')
//4
const btn2=document.querySelector('.article__btn')
const p=document.createElement('p')
p.innerText='nowy'
btn2.insertBefore(p,null)
//5
const articleClone=curr.parentElement.cloneNode(true)
curr.parentElement.parentElement.insertBefore(articleClone,curr.parentElement)
