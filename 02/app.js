console.log('DOM');
const uList = document.querySelector("ul");
const search = uList.querySelectorAll('a[data-url]');

console.log(search);
const a = search[0].dataset.url;
const b = search[1].dataset.url;
const c = search[2].dataset.url;
console.log(a);
console.log(b);
console.log(c);
const aFirst = document.getElementsByTagName("a")[0].setAttribute("href", a);
const aSecond = document.getElementsByTagName("a")[1].setAttribute("href", b);
const aThird = document.getElementsByTagName("a")[2].setAttribute("href", c);


//for (let i = 0; i < search.length; i++) {
//    var a = [];
//    a.push(search[i].dataset.url)
//    a[i] = search[i].dataset.url;
//    console.log(a[i]);
//    console.log(a)

//znowu zlapalem sie na tworzeniu jakichs skomplikowanych funckji,zamiast na wykonaniu podstawowych polecen ;/
