console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

// Bez forEach
// dodanie ul do nav
const navigation = document.querySelector('nav')
const unOrderedList = document.createElement('ul');
const liElOne = document.createElement('li');



if(navigation) {
    navigation.appendChild( unOrderedList )
    
    if(unOrderedList) {
        unOrderedList.appendChild(liElOne)

        if(liElOne) {
            const cloneElTwo = liElOne.cloneNode(true)
            const cloneElThree = liElOne.cloneNode(true)

            unOrderedList.appendChild(cloneElTwo)
            unOrderedList.appendChild(cloneElThree)

            if(cloneElTwo && cloneElThree) {
                const linkElement = document.createElement('a');
                linkElement.setAttribute('href', '/');

                cloneLinkTwo = linkElement.cloneNode(true);
                cloneLinkThree = linkElement.cloneNode(true);

                liElOne.appendChild(linkElement).textContent = "home";
                cloneElTwo.appendChild(cloneLinkTwo).textContent = "gallery"
                cloneElThree.appendChild(cloneLinkThree).textContent = "contact"

                if(cloneLinkTwo && cloneElThree) {
                    cloneLinkTwo.setAttribute('href', '/gallery');
                    cloneLinkThree.setAttribute('href', '/contact');
                } 
            }
        }
    }

}


