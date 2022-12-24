const controlChange = document.querySelector('#font-size-control');
const ourText = document.querySelector('#text');

controlChange.addEventListener('change', event => {
    ourText.style.fontSize = `${event.target.value }px`;
})

