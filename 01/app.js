console.log('DOM');

const commentsList = document.getElementsByClassName(`comments__item comments__item--newest`);
/*console.log(commentsList);*/
/*if (commentsList){
    let count = 0;
    for (let i = 0; i < commentsList.length; i++) {
        const pList = commentsList[i].querySelectorAll('p');*/
        /*console.log(pList);*/
        /*for (let j = 0; j < pList.length; j++) {
            const spanList = pList[j].querySelectorAll('span');
            /*console.log(spanList);*/
            /*for(let k = 0; k < spanList.length; k++)
            if(spanList[k].dataset.info) {
                count++;
            }
        }
        console.log(count);
    }
}*/

//ok to można faktycznie krócej zrobić np tak: 

    for(let i = 0; i < commentsList.length; i++) {
    const artibuteElList = commentsList[i].querySelectorAll('[data-info]');

    console.log("Atrybut 'data-info' występuje: " + artibuteElList.length + " razy" );
    }



