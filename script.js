'use strict'

let title = prompt('Как называется ваш проект?');

let screens = prompt('Какие типы экранов нужно разработать?');

let screenPrice = parseInt(prompt('Сколько будет стоить данная работа?'));

let adaptive = prompt('Нужен ли адаптив на сайте?', 'Да');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = parseInt(prompt('Сколько это будет стоить?'));
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = parseInt(prompt('Сколько это будет стоить?'));
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let rollback = 2;
let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback/100));

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
console.log(getRollbackMessage(fullPrice))

const showTypeOf = function(variable) {
    console.log(variable, typeof variable)
} 

let getAllServicePrices = function() {
    return servicePrice1 + servicePrice2
}
let allServicePrices = getAllServicePrices

function getFullPrice() {
   return screenPrice + allServicePrices()
}

fullPrice = getFullPrice

title = title.replace(/^[^a-zа-яё]*([a-zа-яё])/i, function(m){
    return m.toUpperCase();
})

let getServicePercentPrices = function() {
    return fullPrice() - servicePercentPrice
}
console.log(getServicePercentPrices())
servicePercentPrice = getServicePercentPrices


showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)
console.log(screens)
console.log(fullPrice())



