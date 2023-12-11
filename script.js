'use strict'


const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    allServicePrices: 0,
    fullPrice: 0,
    rollback: 2,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    start: function() {
        const asking = function() {
            appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
            appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные')
            
            do {
                appData.screenPrice =prompt('Сколько будет стоить данная работа?')
            } while (!isNumber(appData.screenPrice))
        
            appData.adaptive = prompt('Нужен ли адаптив на сайте?', 'Да')   
        }
        const isNumber = function(num) {
            return (!isNaN(parseFloat(num)) && isFinite(num))
        }
        
        
        const getAllServicePrices = function() {
            let sum = 0
            for (let i = 0; i < 2; i++) {
              let price = 0
              if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?')
              } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?')
              }
              do {
                price =prompt('Сколько это будет стоить?')
              } while (!isNumber(price))
              sum += +price
            }
            return sum
        }
        const getServicePercentPrices = function() {
            return appData.fullPrice - (Math.ceil(appData.fullPrice * (appData.rollback / 100)))
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
        
        function getFullPrice() {
           return appData.screenPrice + appData.allServicePrices
        }
        
        function getTitle() {
            let titleChar = appData.title.charAt(0).toUpperCase() + appData.title.slice(1)
            return titleChar.trim()
        }
        asking()
        appData.allServicePrices = getAllServicePrices()
        appData.fullPrice = getFullPrice()
        appData.servicePercentPrice = getServicePercentPrices()
        appData.title = getTitle()
        appData.logger()
    },
    logger: function() {
        for (let key in appData) {
            console.log(key)
        }
    },
}




appData.start()

console.log(appData.fullPrice, appData.servicePercentPrice)



                         


