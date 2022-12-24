const ourForm = document.querySelector('.login-form');

ourForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { 
            email, 
            password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Please come back and fill in all the fields!');
    }
    const userDetails = { email: email.value, password: password.value }
    
    console.log(userDetails);
    event.currentTarget.reset();
}