console.log('DOM');

const aList = document.querySelectorAll('a');

if(aList){
    aList.forEach(function(element){
        const array = [];
            if(element.innerText !== null){
                if(element.hasAttribute('data-url')){
                    array.push(element.getAttribute('data-url'));
                }
                if(element){
                    element.setAttribute('href',array);
                }
            }
        });
}
console.log(aList);