const $name = document.getElementById("name");
const $email = document.getElementById("email");
const $subject = document.getElementById("subject");
const $message = document.getElementById("message");
const $form = document.getElementById("form-contact");

function showError(input, message) {
  const contactBox = input.parentElement;
  contactBox.querySelector(".error-msg").textContent = message;
  input.classList.add("form-contact-error");
  input.classList.remove("form-contact-success");
}

function showSuccess(input) {
  const contactBox = input.parentElement;
  contactBox.querySelector(".error-msg").textContent = "";
  input.classList.add("form-contact-success");
  input.classList.remove("form-contact-error");
}

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

function checkLenght(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
      isRequired = true;
    }
  });
  return isRequired;
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

export default function validateForm() {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.matches(".form-contact")) {
      if (checkRequired([$name, $email, $subject, $message])) {
        checkLenght($name, 3, 15);
        checkLenght($subject, 4, 15);
        checkLenght($message, 15, 255);
        checkEmail($email);
      }
    }
  });
}
