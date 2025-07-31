console.log('DOM');

const element = document.querySelectorAll('a[data-url')

element.forEach(takeElement => {
    const data = takeElement.getAttribute('data-url')

    takeElement.setAttribute('href' , data)


}
    
    )