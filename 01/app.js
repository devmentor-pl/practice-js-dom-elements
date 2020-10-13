console.log('DOM');
const list = document.querySelector(".comments__item.comments__item--newest");
console.log(list);

//const arr = [].slice.call(list);
//console.log(arr);
//const pElements = arr.querySelectorAll('p');
//const dataInfo = list.dataset.info;
//console.log(dataInfo);

//const dataAttribute = list.getAttribute('data-info');//
//console.log(dataAttribute);//


    const listSec = list.querySelectorAll('[data-info]');
    console.log(listSec);
    console.log(listSec.length);

   //var elems = document.querySelectorAll(".comments__item > [data-info]")
   //console.log(elems.length)
   //Array.from(elems).forEach( function (el) {
      //console.log(el.getAttribute("data-info"))
   //});

