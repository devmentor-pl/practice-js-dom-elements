const linkaDataUrl = document.querySelectorAll('a[data-url]'); // a z data-url

linkaDataUrl.forEach(link => {

    const dataAUrl = link.getAttribute('data-url');
    
    if(dataAUrl){
        link.setAttribute('href', dataAUrl);
        link.removeAttribute('data-url'); // usuwam data-url
    }

    const href = link.getAttribute('href');

  try {
    new URL(href); // Jeśli nieprawidłowy – wyrzuci wyjątek
    console.log(`Poprawne linkpwanie: ${href}`);
  } catch (error) {
    console.warn(`Niepoprawne linkowanie: ${href}`);
    link.textContent += ' X';
  }
});