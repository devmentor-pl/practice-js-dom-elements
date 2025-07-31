console.log('DOM');

const searchDataUrl = document.querySelectorAll('[data-url]')

// for (let i = 0; i < searchDataUrl.length; i++) {
//     let element = searchDataUrl[i];

//     let url = element.getAttribute('data-url');
//     element.setAttribute('href', url);
//     console.log([i+1] + '. ' + url);
//   }

  searchDataUrl.forEach(function(el){
    const attr = el.getAttribute('data-url')

    el.setAttribute('href', attr)
  })
  