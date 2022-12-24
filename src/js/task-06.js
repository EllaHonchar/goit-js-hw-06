let verification = document.querySelector('#validation-input');
//console.log(verification.getAttribute('data-length'));

const verificationValue = verification.getAttribute('data-length');


verification.addEventListener('blur', event => {

    if(event.target.value.length === verificationValue) {
       verification.classList.add('valid')
        if (verification.classList.contains('invalid')) {
            verification.classList.remove('invalid')
        }
    }
    else {
        if (verification.classList.contains('valid')) {
            verification.classList.remove('valid')
        }
        verification.classList.add('invalid')
    }
})
//ничего не получется ((((((((