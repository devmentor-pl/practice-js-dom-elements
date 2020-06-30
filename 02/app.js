console.log('DOM');


const listData = document.querySelectorAll('a[data-url');
console.log(listData)

// const arrListDate = Array.from(listData)
// console.log(arrListDate)


const arrList = Array.from(listData);
arrList.forEach(function (element) {
    let dev = arrList[0].getAttribute('data-url');
    console.log(dev)
    let mozilla = arrList[1].getAttribute('data-url');
    console.log(mozilla)
    let stackover = arrList[2].getAttribute('data-url');
    console.log(stackover)
    let nothing = arrList[3].getAttribute('data-url');
    console.log(nothing)
    /*dlaczego zwraca  Cannot read property 'getAttribute' of undefined */
})