console.log('DOM');


// const comments = document.getElementsByClassName('.comments__item.comments__item--newest')

// if(comments) {
//     const dataInfo = comments.hasAttribute('[data-info]')
//     console.log (dataInfo.length)
// };
 

const comments = document.querySelector('.comments__item.comments__item--newest')


if(comments) {
    const dataInfo = comments.querySelectorAll('[data-info]')
    console.log (dataInfo.length)
};