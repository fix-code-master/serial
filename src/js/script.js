import card from '../modules/card'
import form from '../modules/form'
import loader from '../modules/loader'
import modal from '../modules/modal'
import slider from '../modules/slider'
import tab from '../modules/tab'
import time from '../modules/time'
import { openModal } from '../modules/modal'
// import server from '../modules/server'

window.addEventListener('DOMContentLoaded', () => {
  const timerId = setTimeout(() => openModal('.modal', timerId), 3000)
  // console.log(setTimeout(() => openModal('.modal', timerId), 3000)) // output 2
  card()
  form('[data-modal]', '.modal', timerId, 'form', '.modal__dialog')
  loader('.loader')
  modal('[data-modal]', '.modal', timerId)
  slider({
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner',
    container: '.offer__slider',
  })
  tab(
    '.tabheader__items',
    '.tabcontent',
    '.tabheader__item',
    'tabheader__item_active'
  )
  time('2023-6-26', '.timer')
  // server()
})
