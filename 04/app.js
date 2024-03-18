console.log("DOM1")

// struktura do wykorzystania w pętli
const menuItems = [
  { text: "start", url: "/" },
  { text: "galeria", url: "/gallery" },
  { text: "kontakt", url: "/contact" },
]

//Część-1 bez struktury
// const ul = document.createElement("ul")

// const firstLi = document.createElement("li")
// const firstA = document.createElement("a")
// firstA.setAttribute("href", "/")
// firstA.textContent = "start"
// firstLi.appendChild(firstA)
// ul.appendChild(firstLi)

// const secondLi = document.createElement("li")
// const secondA = document.createElement("a")
// secondA.setAttribute("href", "/gallery")
// secondA.textContent = "galeria"
// secondLi.appendChild(secondA)
// ul.appendChild(secondLi)

// const thirdLi = document.createElement("li")
// const thirdA = document.createElement("a")
// thirdA.setAttribute("href", "/contact")
// thirdA.textContent = "kontakt"
// thirdLi.appendChild(thirdA)
// ul.appendChild(thirdLi)

// document.querySelector("nav").appendChild(ul)

//Część-2 ze strukturą
const ul = document.createElement("ul")

menuItems.forEach((item) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  //   a.setAttribute("href", "url")
  a.href = item.url
  a.textContent = item.text
  li.appendChild(a)
  ul.appendChild(li)
})

document.querySelector("nav").appendChild(ul)
