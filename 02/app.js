console.log('DOM');

const linksList = document.querySelectorAll('a[data-url]');

for (let i=0; i<linksList.length; i++) {
    let link = linksList[i].dataset.url
    linksList[i].href = link
}


// const links = document.querySelectorAll('a[data-url]')
// for (let i=0;i<links.length;i++) {
//     let link = links[i].dataset.url
//     links[i].href = link
