console.log("DOM");

const comments = document.querySelector(".comments__item.comments__item--newest" );

console.log(comments);

// const commentsNewest = document.querySelectorAll(".comments__item--newest");


if (comments !== null) {
	const spanData = comments.querySelectorAll("[data-info]");
	console.log(spanData.length);
}





