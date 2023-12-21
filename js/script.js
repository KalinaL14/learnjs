'use strict'
const title = document.getElementsByTagName('h1')[0].innerText
const buttons = document.getElementsByClassName('handler_btn')
for (let i = 0; i < buttons.length; i += 1) {
    if (buttons[i]) {
      console.log(buttons[i])
    }
}
const buttonStart = buttons.id='start'
const buttonReset = buttons.id='reset'
const plus = document.querySelector('.screen-btn').textContent
const itemsPercent = document.querySelectorAll('.other-items.percent')
const itemsNumber = document.querySelectorAll('.other-items.number')
const inputRange = document.querySelector('div.rollback input[type=range]') 
const inputRangeValue = document.querySelector('div.rollback span.range-value')
const totalInput = document.getElementsByClassName('total-input')
for (let i = 0; i < totalInput.length; i += 1) {
    if (totalInput[i]) {
      console.log(totalInput[i])
    }
}
const screens = document.querySelectorAll('.screen')       