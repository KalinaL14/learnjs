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



console.log(book[0].childNodes[3])