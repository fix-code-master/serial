function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector)
  modal.classList.remove('show')
  modal.classList.add('hide')
  document.body.style.overflow = ''
}

function openModal(modalSelector, timerId) {
  const modal = document.querySelector(modalSelector)
  modal.classList.remove('hide')
  modal.classList.add('show')
  document.body.style.overflow = 'hidden'
  if (timerId) {
    clearInterval(timerId)
  }
}

function modal(triggerSelector, modalSelector, timerId) {
  //Modal
  const modal = document.querySelector(modalSelector),
    modalTrigger = document.querySelector(triggerSelector)

  modalTrigger.addEventListener('click', () =>
    openModal(modalSelector, timerId)
  )

  modal.addEventListener('click', (event) => {
    if (
      (event.target && event.target == modal) ||
      event.target.getAttribute('data-close') === ''
    ) {
      closeModal(modalSelector)
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modal.classList.contains('show'))
      closeModal(modalSelector)
  })

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal(modalSelector, timerId)
      window.removeEventListener('scroll', showModalByScroll)
    }
  }

  window.addEventListener('scroll', showModalByScroll)
  //Modal
}

// module.exports = modal
export default modal
export { openModal, closeModal }
