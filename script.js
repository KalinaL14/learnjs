'use strict'

let title;
let screens;
let screenPrice;
let adaptive;

let service1;
let servicePrice1;
let service2;
let servicePrice2;
let fullPrice;
let rollback = 2;
let servicePercentPrice;

const isNumber = function(num) {
    return (!isNaN(parseFloat(num)) && isFinite(num))
}

const asking = function() {
    title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные')
    let screenPrice = 0
    do {
        screenPrice =prompt('Сколько будет стоить данная работа?')
    } while (!isNumber(screenPrice))

    adaptive = prompt('Нужен ли адаптив на сайте?', 'Да')   
} 


let getAllServicePrices = function() {
    let sum = 0
    for (let i = 0; i < 2; i++) {
      let price = 0
      if (i === 0) {
        service1 = prompt('Какой дополнительный тип услуги нужен?')
      } else if (i === 1) {
        service2 = prompt('Какой дополнительный тип услуги нужен?')
      }
      do {
        price =prompt('Сколько это будет стоить?')
      } while (!isNumber(price))
      sum += +price
    }
    return (isNumber(sum))
}
let getServicePercentPrices = function() {
    return fullPrice - (Math.ceil(fullPrice - fullPrice * (rollback/100)))
}


const getRollbackMessage = function(price) {
    if (price >= 30000) {
        return 'Даем скидку в 10%';
    } else if (price >= 15000) {
        return 'Даем скидку в 5%';
    } else if (price >= 0) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что-то пошло не так';  
    }
}

const showTypeOf = function(variable) {
    console.log(variable, typeof variable)
}

function getFullPrice() {
   return screenPrice + allServicePrices
}

function getTitle() {
    let titleChar = title.charAt(0).toUpperCase() + title.slice(1)
    return titleChar.trim()
}



asking()
let allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
title = getTitle()



showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)
console.log(screens)
console.log(allServicePrices, 'allServicePrices')
console.log(getRollbackMessage(fullPrice))

console.log(getServicePercentPrices())






