console.log('DOM');

const linksElement = document.querySelectorAll('a[data-url]')

linksElement.forEach(function(link) {
    const dataUrl = link.getAttribute('data-url')
    link.href = dataUrl
})

