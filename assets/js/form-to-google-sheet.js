const scriptURL = 'https://script.google.com/macros/s/AKfycbypeL8RsfnIz4ZqTFlqfDVazyMRcqIGnR4DRtTMhPtC4UkPbY50R5gsG-dmGz0KDSibqg/exec'
const form = document.forms['portofolio-contact-form']
const btnSubmit = document.querySelector('.btn-submit')
const btnLoading = document.querySelector('.btn-loading')
const myAlert = document.querySelector('.my-alert')

form.addEventListener('submit', e => {
    e.preventDefault()

    btnSubmit.classList.toggle('d-none')
    btnLoading.classList.toggle('d-none')

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            btnSubmit.classList.toggle('d-none')
            btnLoading.classList.toggle('d-none')
            myAlert.classList.toggle('d-none')
            form.reset()

            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})