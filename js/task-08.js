const form = document.querySelector('.login-form')

form.addEventListener('submit', handleFormSubmit);


function handleFormSubmit (event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert('All fields must be full!')
    } else {
        const dataForm = {
            email: email.value,
            password: password.value
        }
        console.log(dataForm);
    }
      event.currentTarget.reset();
}



