'use strict'
const title = document.getElementsByTagName('h1')[0].innerText
const buttonStart = document.getElementsByClassName('handler_btn').start
const buttonReset = document.getElementsByClassName('handler_btn').reset
const plus = document.querySelector('.screen-btn').textContent
const itemsPercent = document.querySelectorAll('.other-items.percent')
const itemsNumber = document.querySelectorAll('.other-items.number')
const inputRange = document.querySelector('div.rollback input[type=range]') 
const inputRangeValue = document.querySelector('div.rollback span.range-value')
const totalInput = document.getElementsByClassName('total-input')
const total = document.getElementsByClassName('total-input').total
const totalCount = document.getElementsByClassName('total-input').total-count
const totalCountOther = document.getElementsByClassName('total-input').total-count-other
const totalFullCount = document.getElementsByClassName('total-input').total-full-count
const totalCountRollback = document.getElementsByClassName('total-input').total-count-rollback
const screens = document.querySelectorAll('.screen')       