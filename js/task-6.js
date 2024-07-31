function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const divEl = document.querySelector('#boxes');
const inputNumEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');

const onCreateDiv = () => {
  const amount = Number(inputNumEl.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNumEl.value = ''; 
  }
};

const createBoxes = amount => {
  let i = 1;
  const divArray = [];
  while (i <= amount) {
    const createDivCont = document.createElement('div');
    createDivCont.classList.add('new-box');
    createDivCont.style.height = `${30 + i * 10}px`;
    createDivCont.style.width = `${30 + i * 10}px`;
    createDivCont.style.backgroundColor = getRandomHexColor();
    divArray.push(createDivCont);
    i++;
  }
  divEl.append(...divArray);
};

createBtnEl.addEventListener('click', onCreateDiv);
destroyBtnEl.addEventListener('click', () => {
  divEl.innerHTML = ''; l
});
