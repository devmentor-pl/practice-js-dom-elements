console.log('DOM');
const linkList = document.getElementsByTagName('a')
const linkListArray = Array.from(linkList);
if (linkListArray) {
    for (let i = 0; i < linkListArray.length; i++) {
        if (linkListArray[i].hasAttribute('data-url')) {
            const element = linkListArray[i];
            const attributeName = element.getAttribute('data-url');
            element.setAttribute(
                'href',
                attributeName
            )
        }
    }


}