'use strict'
let book = document.querySelectorAll('.book')
book[1].after(book[0])
book[3].after(book[2])
book[4].after(book[2])
book[5].after(book[2])
book[4].after(book[3])



console.log(book)