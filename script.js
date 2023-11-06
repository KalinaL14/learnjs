let title = 'learnjs';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 321;
let rollback = 2;
let fullPrice = 1000000;
let adaptive = true;

console.log(typeof(title), typeof(fullPrice), typeof(adaptive));
console.log(screens.length);
console.log('Стоимость верстки экранов' + ' ' + screenPrice + ' ' + 'рублей/долларов/гривен/юани. Стоимость разработки сайта' + ' ' + fullPrice + ' ' + 'рублей/долларов/гривен/юани');
console.log(screens.toLowerCase().split());
console.log('Процент отката посреднику за работу'+ ' ' + fullPrice * (rollback/100));


