console.log('DOM');
const links = document.querySelectorAll('a[data-url]')
for (let i=0;i<links.length;i++) {
    let link = links[i].dataset.url
    links[i].href = link
}