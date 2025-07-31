console.log('DOM');
const commentsItem = document.querySelector(".comments__item");
const newWest = document.querySelector(".comments__item--newest");

if (commentsItem && newWest) {
    const dataInfo = document.querySelectorAll("[data-info]")
    console.log(`Znaleziono ${dataInfo.length}`)
};
