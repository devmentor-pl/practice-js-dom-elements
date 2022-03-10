console.log('DOM');

const elements =  document.querySelectorAll('[data-url]');

elements.forEach(function(a){

            const link = a.getAttribute('data-url');
            a.setAttribute('href', link);
});
