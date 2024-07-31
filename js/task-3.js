const nameInputValue = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInputValue.addEventListener('input', () => {
  if (nameInputValue.value.trim() === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = nameInputValue.value.trim();
  }
});
