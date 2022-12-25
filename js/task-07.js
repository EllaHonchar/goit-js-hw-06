const controlChange = document.querySelector('#font-size-control');
const ourText = document.querySelector('#text');

controlChange.addEventListener('input', event => {
    ourText.style.fontSize = `${event.target.value }px`;
})

