'use strict'
let book = document.querySelectorAll('.book')
book[1].after(book[0])
book[3].after(book[2])
book[4].after(book[2])
book[5].after(book[2])
book[4].after(book[3])

let backgroundImage = document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'

let titleBook = book[4].childNodes[1].children[0].innerText = "Книга 3. this и Прототипы Объектов"

let deleteAdv = document.body.childNodes[5].remove()

book[0].childNodes[3].children[2].after(book[0].childNodes[3].children[8])
book[0].childNodes[3].children[9].after(book[0].childNodes[3].children[2])
book[0].childNodes[3].children[3].after(book[0].childNodes[3].children[2])
book[0].childNodes[3].children[2].after(book[0].childNodes[3].children[6])

book[5].childNodes[3].children[1].after(book[5].childNodes[3].children[9])
book[5].childNodes[3].children[5].after(book[5].childNodes[3].children[3])
book[5].childNodes[3].children[8].after(book[5].childNodes[3].children[6])


book[2].children[1].insertAdjacentHTML("beforeend", `<li>Глава 8: За пределами ES</li>`)
book[2].childNodes[3].children[10].after(book[2].childNodes[3].children[9])