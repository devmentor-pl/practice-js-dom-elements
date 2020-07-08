console.log('DOM');

const commentsItem = document.getElementsByClassName('comments__item');

if (commentsItem) {
    const arr = Array.from(commentsItem);
    const children = arr[0].children;

    const arrChildren = Array.from(children);
    console.log(arrChildren);

    for (let i = 0; i < arrChildren.length; i++) {
        const span = arrChildren[i].children;
        console.log(span);
        const arrSpan = Array.from(span);
        for (let j = 0; j < arrSpan.length; j++) {

            if (arrSpan[j].hasAttribute('data-info')) {
                console.log(arrSpan[j])
            }
        }
    }
}