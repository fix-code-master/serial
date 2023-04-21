import { openModal, closeModal } from './modal'
import postData from '../server/server'

function form(triggerSelector, modalSelector, timerId, form, modalDialog) {
  // Form

  const forms = document.querySelectorAll(form)

  forms.forEach((form) => bindPostData(form))
  const message = {
    loading: 'img/spinner.svg',
    succes: 'Thank you for our submitting',
    failure: 'Something went wrong',
  }

  // async function postData(url, data) {
  //   // const res = await fetch(url, {
  //   //   method: 'POST',
  //   //   headers: {
  //   //     'Content-type': 'application/json',
  //   //   },
  //   //   body: data,
  //   // })

  //   // if (!res.ok) {
  //   //   throw new Error(`Coluldn't fetch url ${url}, status: ${res.status}`)
  //   // }

  //   // return await res.json()

  //   const res = await axios.post(url, data)

  //   // const res = await axios({
  //   //   method: 'post',
  //   //   url: url,
  //   //   data: data,
  //   // })

  //   return await res
  // }

  function bindPostData(form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault()

      const statusMessage = document.createElement('img')
      statusMessage.src = message.loading
      statusMessage.style.cssText = `
         display: block;
         margin: 0 auto;
       `
      form.insertAdjacentElement('afterend', statusMessage)

      const formData = new FormData(form)
      // json = JSON.stringify(Object.fromEntries(formData.entries()))

      postData(
        'http://localhost:3000/request',
        Object.fromEntries(formData.entries())
      )
        .then(() => {
          showThanksModal(message.succes)
          statusMessage.remove()
        })
        .catch(() => showThanksModal(message.failure))
        .finally(() => form.reset())
    })
  }

  function showThanksModal(msg) {
    const prevDialogModal = document.querySelector(modalDialog)

    prevDialogModal.classList.add('hide')
    openModal(triggerSelector, modalSelector, timerId)

    const thanksModal = document.createElement('div'),
      modal = document.querySelector(modalSelector)
    thanksModal.classList.add('modal__dialog')
    thanksModal.innerHTML = `
     <div class="modal__content">
       <div data-close class="modal__close">&times;</div>
       <div class="modal__title">${msg}</div>
     </div>
     `

    modal.append(thanksModal)

    setTimeout(() => {
      thanksModal.remove()
      closeModal(modalSelector)
      prevDialogModal.classList.remove('hide')
      prevDialogModal.classList.add('show')
    }, 2000)
  }
}

// module.exports = form
export default form
