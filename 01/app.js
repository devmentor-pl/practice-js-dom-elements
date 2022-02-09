const docs = document.getElementsByClassName('comments__item comments__item--newest')

const docsArray = Array.from(docs)

docsArray.forEach(function(item) {
   const spanItems = item.getElementsByTagName('span')
   const spanArray = Array.from(spanItems)
   spanArray.forEach(function(item) {
      console.log(item.hasAttribute('data-info'), item.dataset.info)
    })
})


