const formEl = document.querySelector('form.login-form');
const btnSubmit = document.querySelector('.submit');

// console.log(formEl);

formEl.addEventListener('submit', e => {
  e.preventDefault();
  if (!formEl.elements.email.value || !formEl.elements.password.value) {
    alert('All form fields must be filled in');
    return;
  }
  const formData = {
    email: formEl.elements.email.value,
    password: formEl.elements.password.value,
  };
  console.log(formData);
  formEl.reset();
});
