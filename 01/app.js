console.log('DOM');



const item = document.getElementsByClassName('.comments__item comments__item--newest');

console.log(item);

if (item) {
    const item1 = document.querySelectorAll('span');
    const arr = Array.from(item1);


    if (arr)
        for (let i = 0; i < arr.length; i++) {

            const dataInfo = arr[i].getAttribute('data-info');
            console.log(dataInfo)
        }
    console.log(`tych elementów z atrybutem data-info jest:  ${arr.length}`)
}