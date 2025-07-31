console.log('DOM')

const anchorsWithDataUrl = document.querySelectorAll("[data-url]")
if (anchorsWithDataUrl) {
    anchorsWithDataUrl.forEach(anchor => {
        const getDataUrl = anchor.getAttribute("data-url")
        anchor.setAttribute("href", getDataUrl)
    })
}
