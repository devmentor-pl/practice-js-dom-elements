console.log('DOM');


// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];


// const nav1=document.createElement('nav')
// document.body.appendChild(nav1)
// const ul1=document.createElement('ul')
// nav1.appendChild(ul1)

// const li=document.createElement('li')
// ul1.appendChild(li)
// const a=document.createElement('a')
// li.appendChild(a)
// a.innerHTML=menuItems[0].text
// a.href=menuItems[0].url





const nav=document.createElement('nav')
document.body.appendChild(nav)
const ul=document.createElement('ul')
nav.appendChild(ul)
 const navItem=''
const navLink=''
console.log(nav)
console.log(ul)
for(let i =0;i<menuItems.length;i++){
    console.log(menuItems)
  const  navItem=document.createElement('li')
  console.log(navItem)
 
  const  navLink=document.createElement('a')
    
  navLink.href=menuItems[i].url
    console.log(navLink)
  navLink.innerText=menuItems[i].text;
    navItem.appendChild(navLink)
    ul.appendChild(navItem)
console.log(navLink)
}






