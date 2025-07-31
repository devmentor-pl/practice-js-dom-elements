console.log('DOM');

const newestComment = document.getElementsByClassName('comments__item', 'comments__item--newest')
console.log(newestComment)
if (newestComment) {
    for (let i = 0; i < newestComment.length; i++) {
        const newestCommentInfo = newestComment[i].querySelectorAll('[data-info]')
        console.log(newestCommentInfo)
        console.log('Znaleziono ' + newestCommentInfo.length + ' elementy/ów')
    }
}

