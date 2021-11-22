const form = document.querySelector('.feedback-form')
// const input = document.querySelector('input')

form.addEventListener('input', onFormSubmit)
// console.log(form);

// input.addEventListener('input',chengeInput)

// localStorage.setItem('feedback-form-state','qwerty')


const inputSubmit = {
    email: "",
    message: '',
}

function onFormSubmit(event) {
    event.preventDefault();

    // const formElements = event.currentTarget.elements;

    // const mail = formElements.email.value
    // const message = formElements.message.value

    // console.log(mail);
    // console.log(message);

    const formData = new FormData(event.currentTarget)
    console.log(formData);


    localStorage.setItem('feedback-form-state',`${inputSubmit}`)
}


// function chengeInput(event) {
//     console.log(event.currentTarget.value);
// }
