console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];
// console.log(menuItems[0].text);
// console.log(menuItems[0].url);

const nav=document.querySelector('nav');

// step by step

// const listItem1=document.createElement('li');
// const listItem2=document.createElement('li');
// const listItem3=document.createElement('li');

// nav.appendChild(listItem1);
// nav.appendChild(listItem2);
// nav.appendChild(listItem3);

// const link1=document.createElement('a');
// const link2=document.createElement('a');
// const link3=document.createElement('a');

// link1.setAttribute('href','/');
// link1.innerText='start';

// link2.setAttribute('href','/gallery');
// link2.innerText='galeria';

// link3.setAttribute('href','/contact');
// link3.innerText='kontakt';

// listItem1.appendChild(link1); 
// listItem2.appendChild(link2); 
// listItem3.appendChild(link3); 

// creating elements with Array and ForEach

menuItems.forEach(function(textElement, index){
   textElement=menuItems[index].text;
   let urlElement=menuItems[index].url;
   console.log('text --  '+textElement+"    url -- "+urlElement);

   const listItems=[];
   const links=[];

   listItems[index]=document.createElement('li');
   nav.appendChild(listItems[index])

   links[index]=document.createElement('a');

   listItems[index].appendChild(links[index]);

   links[index].setAttribute('href', menuItems[index].url);
   links[index].innerText= menuItems[index].text;

   })

