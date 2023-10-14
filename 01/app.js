console.log("DOM");

const elements = document.querySelector(
    ".comments__item.comments__item--newest"
);

if (elements) {
    const data = document.querySelectorAll("[data-info]");

    console.log("Zostało znalezionych " + data.length + " elementów");
}
