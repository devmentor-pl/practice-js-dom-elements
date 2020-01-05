const links = [...document.querySelectorAll('a[data-url]')]
links.map(link => {
    const url = link.getAttribute('data-url')
    return link.href = url
})