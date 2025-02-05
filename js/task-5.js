function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divColor = document.querySelector('.widget');
const spanColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', () => {
  const functionRandomColor = getRandomHexColor();
  divColor.style.backgroundColor = functionRandomColor;
  spanColor.style.color = functionRandomColor;
});
