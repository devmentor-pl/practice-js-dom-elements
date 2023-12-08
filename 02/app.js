const links = document.getElementsByTagName('a')

const linksArray = Array.from(links)

            
linksArray.forEach(function(item) {
  const link = item.dataset.url
  item.setAttribute('href', link)
});