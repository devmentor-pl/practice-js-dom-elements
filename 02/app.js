const elements = document.querySelectorAll("[data-url]");

elements.forEach(element => element.href = element.dataset.url);