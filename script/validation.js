let userForm = document.querySelector('form');
let emailError = document.querySelector('#email-error-feedback');
let confirmationPasswordError = document.querySelector('#confirm-password-error-feedback');


let errorFeedback = '';
function validateUserInput() {
  let userName = document.querySelector('#name').value;
  let userEmail = document.querySelector('#email').value
  let userPassword = document.querySelector('#password').value;
  let userConfirmationPassword = document.querySelector('#confirmation-password').value;
  console.log('please wait while i validate your form.....');
  console.log([
    userName, userPassword, userConfirmationPassword, userEmail
  ])

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  if (!validateEmail(userEmail)) {
    errorFeedback = 'true';
  }
  else if (userPassword !== userConfirmationPassword) {
    errorFeedback = 'true';
  }
  else {
    errorFeedback = 'false';
  }
}

function setError() {
  let userEmail = document.querySelector('#email').value
  let userPassword = document.querySelector('#password').value;
  let userConfirmationPassword = document.querySelector('#confirmation-password').value;

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  if (!validateEmail(userEmail)) {
    emailError.textContent = 'Invalid email';
  }
  else if (userPassword !== userConfirmationPassword) {
    confirmationPasswordError.textContent = 'Password doesn\'t match';
  }
}

function handleSubmit(event) {
  validateUserInput();
  if (errorFeedback === 'true') {
    event.preventDefault();
    setError();
  }
  else if (errorFeedback === 'false') {
    event.target.reset();
  }
}
userForm.addEventListener('submit',
handleSubmit);

