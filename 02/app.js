console.log('DOM');

const ul = document.getElementsByTagName('ul');
const a = document.getElementsByTagName('a');

if (ul) {
    const arrA = Array.from(a);
    for (let i = 0; i < arrA.length; i++) {
        var content = a[i].getAttribute('data-url');
        console.log(content);
        arrA[i].setAttribute('href', content)
    }
    console.log(arrA[3]);

}