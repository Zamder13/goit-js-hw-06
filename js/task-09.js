function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBattonClick() {
  span.textContent = getRandomHexColor();
  return (document.body.style.background = span.textContent)
}

const span = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', onBattonClick)



