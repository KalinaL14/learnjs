'use strict'
const book = document.querySelectorAll('.book')
book[1].before(book[0])
book[2].after(book[5])
book[4].after(book[3])
console.log(book)