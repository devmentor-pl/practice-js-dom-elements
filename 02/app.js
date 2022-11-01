console.log('DOM');

const ulElements = document.querySelectorAll("[data-url]");

const arrUlElements = [...ulElements];

const a1 = arrUlElements[0].dataset.url;
const a2 = arrUlElements[1].dataset.url;
const a3 = arrUlElements[2].dataset.url;

arrUlElements[0].setAttribute("href", a1);
arrUlElements[1].setAttribute("href", a2);
arrUlElements[2].setAttribute("href", a3);


// czy moglbys mi powiedziec dlaczego mi w petli wyswietla w konsoli undefined? mialem pomysl aby zrobic ten kod uniwersalny, ale na poczatku juz wystepuje blad :/.

// const a = [];
// for (let i = 0; i < arrUlElements.length; i++) {
//   arrUlElements[i.dataset.url].push(a);
// }