function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeColor = document.querySelector('.change-color');
const bodyColor = document.querySelector('.color');

changeColor.addEventListener('click', () => {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  bodyColor.textContent = color;
});
