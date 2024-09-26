const links = document.querySelectorAll('[data-url')

links.forEach(link => {
    const data = link.getAttribute('data-url')
    link.setAttribute('href', data)
})