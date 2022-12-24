const userNameInput = document.querySelector('#name-input');
const userNameOutput = document.querySelector('#name-output');

userNameInput.addEventListener('input', event =>  {
    userNameOutput.textContent = event.target.value;

	if (event.target.value === ' ') {
		userNameOutput.textContent = 'Anonymous'
	}
})
