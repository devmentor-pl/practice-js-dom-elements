console.log("DOM");

// struktura do wykorzystania w pętli
const menuItems = [
  { text: "start", url: "/" },
  { text: "galeria", url: "/gallery" },
  { text: "kontakt", url: "/contact" },
];

const navSection = document.querySelector("nav");
const unorderdList = document.createElement("ul");
navSection.appendChild(unorderdList);

for (let i = 0; i < menuItems.length; i++) {
  const listItem = document.createElement("li");
  const ancherTag = document.createElement("a");
  listItem.appendChild(ancherTag);
  ancherTag.href = menuItems[i].url;
  ancherTag.innerText = menuItems[i].text;
  unorderdList.appendChild(listItem);
}
