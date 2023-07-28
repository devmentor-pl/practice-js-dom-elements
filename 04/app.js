console.log("DOM");

// struktura do wykorzystania w pętli
const menuItems = [
  { text: "start", url: "/" },
  { text: "galeria", url: "/gallery" },
  { text: "kontakt", url: "/contact" },
];

const nav = document.querySelector("nav");

if (nav) {
  const ul = document.createElement("ul");
  nav.appendChild(ul);
  if (ul) {
    // const numberOfElements = 3;
    // const arr = [];
    // for (let i = 0; i < numberOfElements; i++) {
    //   const li = document.createElement("li");
    //   ul.appendChild(li);
    //   const a = document.createElement("a");
    //   li.appendChild(a);
    //   arr.push(a)
    // }
    // arr[0].setAttribute('href', "/"), arr[0].textContent = "start";
    // arr[1].setAttribute('href', "/gallery"), arr[1].textContent = "galeria";
    // arr[2].setAttribute('href', "/contact"), arr[2].textContent = "kontakt";



    menuItems.forEach(function(item) {
     const li = document.createElement('li');
     ul.appendChild(li)
     const a = document.createElement('a');
     li.appendChild(a);
     for(const key in item) {
        a.setAttribute('href', item[key]);
        a.textContent = item.text
     }
    })
  }

}
