'use strict'
const title = document.getElementsByTagName('h1')[0].innerText
const buttonStart = document.getElementsByClassName('handler_btn')[0]
const buttonReset = document.getElementsByClassName('handler_btn')[1]
const plus = document.querySelector('.screen-btn').textContent
const itemsPercent = document.querySelectorAll('.other-items.percent')
const itemsNumber = document.querySelectorAll('.other-items.number')
const inputRange = document.querySelector('div.rollback input[type=range]') 
const inputRangeValue = document.querySelector('div.rollback span.range-value')
const totalInput = document.getElementsByClassName('total-input')
const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const totalFullCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]
const screens = document.querySelectorAll('.screen')