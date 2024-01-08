'use strict'
const title = document.getElementsByTagName('h1')[0]
const buttonPlus = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')


const inputRange = document.querySelector('.rollback input')
const inputRangeValue = document.querySelector('.rollback .range-value')


const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]



const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]
let screens = document.querySelectorAll('.screen')

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 2,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    count: 0,
    init: function() {
        this.addTitle()
        startBtn.addEventListener('click', this.checkedDisabled)
        resetBtn.addEventListener('click', this.reset)
        //startBtn.addEventListener('click', appData.start)
        buttonPlus.addEventListener('click', this.addScreenBlock)
        inputRange.addEventListener('input', this.showRollback)
        this.addScreens()
    },
    addTitle: function() {
        document.title = title.textContent
    },
    start: function() {
        this.addScreens()
        this.addServices()
        this.addPrices()
        //appData.logger()
        this.showResult()
    },
    disableBtn: function () {
        const allLeftInputs = document.querySelectorAll(
          "input[type = 'text'] , select, .screen-btn"
        )
        allLeftInputs.forEach((item) => {
          item.disabled = true
        })
    },
    showResult: function() {
        total.value = this.screenPrice
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
        fullTotalCount.value = this.fullPrice
        totalCountRollback.value = this.servicePercentPrice
        totalCount.value = this.count
        this.disableBtn()
        startBtn.style = 'display: none'
        resetBtn.style = 'display: block'
    },
    addScreens: function() {
        screens = document.querySelectorAll('.screen')

        screens.forEach(function(screen, index){
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent


           appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                amount: +input.value
            })
        })
    },
    addServices: function() {
        otherItemsPercent.forEach(function(item){
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        })
        otherItemsNumber.forEach(function(item){
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        })
    },
    addScreenBlock: function() {
        const cloneScreen = screens[0].cloneNode(true)
        screens[screens.length - 1].after(cloneScreen)
    },

    addPrices: function() {
        for (let screen of this.screens) {
            this.screenPrice += +screen.price
            this.count += +screen.amount
        }
        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key]
        }
        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
        }

        this.fullPrice = +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber
        this.servicePercentPrice = this.fullPrice - (Math.ceil(this.fullPrice * (this.rollback / 100)))
    },
    
    
    logger: function() {
        for (let key in appData) {
            console.log(key, appData[key])
        }
    },
    showRollback:  function() {
        this.rollback = inputRange.value
        inputRangeValue.textContent = `${inputRange.value}%`
    },
    checkedDisabled:  function() {
        let screenSelect = document.querySelectorAll('.screen .main-controls__select')

        screenSelect.forEach(function (screen) {
            const select = screen.querySelector('select');
            if (select.options[select.selectedIndex].textContent === 'Тип экранов' || select.value === 0) {
              startBtn.disabled = true
            } else {
                startBtn.disabled = false
                appData.start()
            }
        })
    },
    reset: function() {
        total.value = 0
        totalCountOther.value = 0
        fullTotalCount.value = 0
        totalCountRollback.value = 0
        totalCount.value = 0
        appData.rollback = 0
        inputRange.value = 0
        inputRangeValue.textContent = 0
        localStorage.clear()
        const checkboxes = document.querySelectorAll('.custom-checkbox')
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false
         })
        const selectAll = document.querySelectorAll('select')
        selectAll.forEach((select) => {
            select.removeAttribute('disabled')
            select.selectedIndex = 0
        })
        this.screens = []
        const allLeftInputs = document.querySelectorAll(
            "input[type = 'text'] , select, .screen-btn"
        )
        allLeftInputs.forEach((item) => {
            item.disabled = false
        })
        startBtn.style = 'display: block'
        resetBtn.style = 'display: none'

    },

};


appData.init();