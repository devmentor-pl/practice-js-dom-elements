// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

// II sposób z wykorzystaniem struktury
const articleSection = document.querySelector('article');
const new2UlSection = document.createElement('ul');

if(articleSection){
    articleSection.appendChild(new2UlSection);
    let j=0;
    while(j<3){
        const new2LiSection = document.createElement('li');
        const new2ASection = document.createElement('a');
        new2ASection.innerHTML = menuItems[j]['text'];
        new2ASection.setAttribute('href',menuItems[j]['url']);
        new2UlSection.appendChild(new2LiSection).appendChild(new2ASection);
        j++;
    }
}

// const A2List = document.querySelectorAll('a');
// A2List.forEach(function(element,index){
//         element.setAttribute('href', menuItems[index]['url']);
//         element.innerHTML = menuItems[index]['text'];
// });
