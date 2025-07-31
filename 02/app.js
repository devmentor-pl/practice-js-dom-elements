const links = document.querySelectorAll("a[data-url]")

links.forEach((link) => {
  const url = link.getAttribute("data-url")

  if (url) {
    link.setAttribute("href", url)
    link.setAttribute("target", "_blank")
  } else {
    link.removeAttribute("href")
  }
})
