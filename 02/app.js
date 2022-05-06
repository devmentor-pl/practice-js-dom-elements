console.log('DOM');

const dataUrl = document.querySelectorAll('a')

for(let i = 0; i < dataUrl.length; i++){
    if(dataUrl[i].hasAttribute('data-url')){
        let urlAdres = dataUrl[i].dataset.url;
        dataUrl[i].setAttribute('href', urlAdres)
    }
}