console.log('DOM');


const grand = document.querySelector('nav')
if(grand){
    const ul = document.createElement('ul');
    
    grand.appendChild(ul);

    const par = document.querySelector('ul');

    if(par) {
        const li1 = document.createElement('li');
        par.appendChild(li1);

        const a1 = document.createElement('a');
        a1.setAttribute('href','/');
        a1.innerText = 'start';
        li1.appendChild(a1);

        
    }
    if(par) {
        const li2 = document.createElement('li');
        par.appendChild(li2);
        const a2 = document.createElement('a');
        a2.setAttribute('href','/gallery')
        a2.innerText = "galeria";
       
        li2.appendChild(a2);

    }

    if(par) {
        const li3 = document.createElement('li');
        par.appendChild(li3);
        const a3 = document.createElement('a');
        a3.setAttribute('href','/contact')
        a3.innerText = "kontakt";
        li3.appendChild(a3);

    }


    
}



//chciałbym rozwiązanie z pętlą omówić na spotkaniu


// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];