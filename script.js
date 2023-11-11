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
console.log(servicePercentPrice);

if (fullPrice >= 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice >= 15000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice >= 0) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что-то пошло не так');  
}


