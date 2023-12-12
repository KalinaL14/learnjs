'use strict'


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    allServicePrices: 0,
    fullPrice: 0,
    rollback: 2,
    servicePercentPrice: 0,
    services: {},
    start: function() {
        appData.asking()
        appData.addPrices()
        appData.getFullPrice()
        appData.getServicePercentPrices()
        appData.getTitle()
        appData.logger()
    },
    asking: function() {
        const isNumber = function(num) {
            return (!isNaN(parseFloat(num)) && isFinite(num))
        }
        do {
            appData.title = prompt('Как называется ваш проект?')
        } while (isNan(appData.title))

        
        do {
            appData.screenPrice = +prompt('Сколько будет стоить данная работа?')
        } while (!isNumber(appData.screenPrice))

        for (let i = 0; i < 2; i++) {
            let name = ''
            do {
                name = prompt('Какие типы экранов нужно разработать?')
            } while (isNan(name))
            let price = 0
            do {
              price = +prompt('Сколько будет стоить данная работа?')
            } while (!isNumber(price))

            appData.screens.push({id: i, name: name, price: price})
        }

        for (let i = 0; i < 2; i++) {
            let name = ''
            do {
                name = prompt('Какой дополнительный тип услуги нужен?')
            } while (isNan(name))
            let price = 0
            do {
              price = +prompt('Сколько это будет стоить?')
            } while (!isNumber(price))

            appData.services[name] = +price
        }
    
        appData.adaptive = prompt('Нужен ли адаптив на сайте?', 'Да')   
    },

    addPrices: function() {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }
        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },
    
    getServicePercentPrices: function() {
        appData.servicePercentPrice = appData.fullPrice - (Math.ceil(appData.fullPrice * (appData.rollback / 100)))
    },
    
    
    getRollbackMessage: function(price) {
        if (price >= 30000) {
            return 'Даем скидку в 10%';
        } else if (price >= 15000) {
            return 'Даем скидку в 5%';
        } else if (price >= 0) {
            return 'Скидка не предусмотрена';
        } else {
            return 'Что-то пошло не так';  
        }
    },
    
    getFullPrice: function() {
        appData.fullPrice =  appData.screenPrice + appData.allServicePrices
    },
    
    getTitle: function() {
        let titleChar = appData.title.charAt(0).toUpperCase() + appData.title.slice(1)
        appData.getTitle = titleChar.trim()
    },
    logger: function() {
        for (let key in appData) {
            console.log(key, appData[key])
        }
    },
}




appData.start()



                         


