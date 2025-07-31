const links = document.querySelectorAll("[data-url]");
console.log(links);

links.forEach((a) => {
  a.href = a.getAttribute("data-url");
});
