console.log('DOM');

const aElements = document.querySelectorAll('a[data-url]');
const arr = Array.from(aElements);

arr.forEach(function(el)
{
    const url = el.dataset.url
    //console.log(url)
    el.setAttribute('href', url)
})



/*const arr = Array.from(aElements);
console.log(arr);
if(arr){
/*for(let i = 0; i<arr.length; i++)
{
    //console.log(arr[i]);
    const links = arr[i].getAttribute('data-url')
    console.log(links)  
 
   
}
console.log(arr.length);


const devmentor = arr[0].getAttribute('data-url');
const developerMozilla = arr[1].getAttribute('data-url');
const stackoverflow = arr[2].getAttribute('data-url');
const bigNull = arr[3].getAttribute('data-url');
//console.log(devmentor, developerMozilla, stackoverflow, bigNull);

const devmentorHref= document.querySelector('li');
const devMentHrefSet = devmentorHref.querySelector('a');
if(!devMentHrefSet.hasAttribute('href'));
devMentHrefSet.setAttribute('href', devmentor);

const developerMozillaHref = devmentorHref.nextElementSibling;
//console.log(developerMozillaHref)
const devMozHrefSet = developerMozillaHref.querySelector('a');
if(!devMozHrefSet.hasAttribute('href'));
{
    devMozHrefSet.setAttribute('href', developerMozilla);
}

const stackoverflowHref = developerMozillaHref.nextElementSibling;
const stackHrefSet = stackoverflowHref.querySelector('a');
if(!stackHrefSet.hasAttribute('href'));
{
    stackHrefSet.setAttribute('href', stackoverflow);
}

const bigNullHref = stackoverflowHref.nextElementSibling;
const bigNullHrefSet = bigNullHref.querySelector('a')
if(!bigNullHrefSet.hasAttribute('href'))
{
    bigNullHrefSet.setAttribute('href', '#')
   // console.log(bigNullHrefSet)
}

}*/
//zostawiam też niektóre zakomentowane rzeczy, żeby pokazać mój tok myślowy, jak próbowałem zadanie rozwiązać. Czy trzeba to wszystko wpisywać ręcznie
//czy można, to jakoś wpisać za pomocą pętli lub funkcji?


