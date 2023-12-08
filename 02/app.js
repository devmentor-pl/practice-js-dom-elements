console.log('DOM');

const linkElementList = document.querySelectorAll('a');

if (linkElementList) {

    const arr = Array.from(linkElementList);

    for (let i = 0; i < arr.length; i++) {


        if (arr[i].hasAttribute('data-url')) {
            const dataUrl = arr[i].getAttribute('data-url');
            arr[i].setAttribute('href', dataUrl);
            console.log(dataUrl);
        };

    };
};














