console.log('DOM');
let comment, dataInfo;

const commentsList = document.querySelector(`.comments`);

if (commentsList === null) {
	console.log(`Something goes wrong...`);
} else {
	comment = commentsList.querySelector(`.comments__item.comments__item--newest`);
	dataInfo = comment.querySelectorAll('[data-info]');
	dataInfo.forEach(element => console.log(element));
}
