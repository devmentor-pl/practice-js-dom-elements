console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navWithItems = document.createElement('nav');
const ulWithItems = document.createElement('ul');

menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.url;
    a.textContent = item.text;
    li.appendChild(a);
    ulWithItems.appendChild(li);
});

navWithItems.appendChild(ulWithItems);

document.body.appendChild(navWithItems);

/* 
DOM elements are created using the document.createElement function for nav (navigation), 
ul (list), and for each li element (menu item) and 'a' (link).

We define the menu structure as an array of objects called menuItems, where each object 
represents a menu item, containing text (displayed text) and url (URL address).

We iterate through each element in the menuItems array using the forEach method. 
Inside the forEach loop, we create li and a elements, set the href attribute and text 
in the link based on the object from the menuItems array.

We append the created elements to each other, first a to li, and then li to ul. Finally
, outside the loop, we append the created ul list to the nav element, and then add the 
entire nav element to the document body.

This allows for the dynamic creation of a menu structure based on data from the menuItems array. 
It is more flexible and easier to manage when adding, removing, or modifying menu items.



Stworzone elementy DOM za pomocą funkcji document.createElement dla nav (nawigacji), 
ul (listy) oraz dla każdego elementu li (pozycji menu) i 'a' (odnośnika).

Definiujemy strukturę menu jako tablicę obiektów menuItems, gdzie każdy obiekt reprezentuje 
jedną pozycję w menu, zawierającą text (tekst do wyświetlenia) i url (adres URL).

Przechodzimy przez każdy element w tablicy menuItems za pomocą metody forEach.
Wewnątrz pętli forEach tworzymy elementy li i a, ustawiamy atrybuty href oraz tekst w 
odnośniku na podstawie obiektu z tablicy menuItems.

Dołączamy utworzone elementy do siebie, najpierw a do li, a następnie li do ul.
Na koniec, poza pętlą, dołączamy utworzoną listę ul do elementu nav, a następnie dodajemy 
cały element nav do ciała dokumentu.

dynamiczne tworzenie struktury menu na podstawie danych z tablicy menuItems. 
Jest to bardziej elastyczne i łatwiejsze do zarządzania w przypadku dodawania, 
usuwania lub modyfikowania pozycji menu.


 */