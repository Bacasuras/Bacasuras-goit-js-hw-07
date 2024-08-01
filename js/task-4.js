const formEl = document.querySelector('form.login-form');
const btnSubmit = document.querySelector('.submit');

// console.log(formEl);

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const emailValue = formEl.elements.email.value.trim();
  const passwordValue = formEl.elements.password.value.trim();
  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return;
  }
  const formData = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(formData);
  formEl.reset();
});
