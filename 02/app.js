console.log('DOM');
const links = document.querySelectorAll('[data-url]')

if(links){
    for(let link of links){
        const url = link.dataset.url;
        link.setAttribute('href', url);
    }
}