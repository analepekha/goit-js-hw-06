const inputText = document.querySelector('#validation-input')
const checkNumber = +inputText.dataset.length
inputText.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === checkNumber) {
        inputText.classList.remove('invalid')
        return inputText.classList.add('valid')
    } else {
        inputText.classList.remove('valid')
        return inputText.classList.add('invalid')
    }
})
