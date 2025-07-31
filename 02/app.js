const aList = document.querySelectorAll('a[data-url]');

let hasAttribute;

const hasLink = aList.forEach((link) => {
  hasAttribute = link.getAttribute('data-url');
  link.setAttribute('href', hasAttribute);
});
