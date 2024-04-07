console.log('DOM');

// rozwiązanie bez korzystania z tablicy

// const navigation = document.querySelector('nav');

// const newUl = document.createElement('ul');

// const li1 = document.createElement('li');
// const a1 = document.createElement('a');
// a1.textContent = 'start';
// a1.setAttribute('href', '/');
// li1.appendChild(a1);

// const li2 = document.createElement('li');
// const a2 = document.createElement('a');
// a2.textContent = 'galeria';
// a2.setAttribute('href', '/gallery');
// li2.appendChild(a2);

// const li3 = document.createElement('li');
// const a3 = document.createElement('a');
// a3.textContent = 'kontakt';
// a3.setAttribute('href', '/contact');
// li3.appendChild(a3);

// newUl.appendChild(li1);
// newUl.appendChild(li2);
// newUl.appendChild(li3);

// navigation.appendChild(newUl);

// rozwiązanie z wykorzystaniem pętli

const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const newUl = document.createElement('ul');

const navigation = document.querySelector('nav');

menuItems.forEach(function(item) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.text;
    a.setAttribute('href', item.url);

    li.appendChild(a);

    newUl.appendChild(li);
});

navigation.appendChild(newUl);