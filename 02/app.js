console.log('DOM');
const linkList = document.getElementsByTagName('a')
const sth = Array.from(linkList);
if (sth) {
    for (let i = 0; i < sth.length; i++) {
        if (linkList[i].hasAttribute('data-url')) {
            const element = linkList[i];
            const attributeName = element.getAttribute('data-url');
            element.setAttribute(
                'href',
                attributeName
            )
        }
    }


}