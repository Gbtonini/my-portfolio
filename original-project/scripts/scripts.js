function getMenu() {
  return document.getElementById("mobile-menu");
}

function openMenu() {
  document.body.style.overflow = "hidden";
  getMenu().style.right = 0;
}

function closeMenu() {
  document.body.style.overflow = "unset";
  getMenu().style.right = null;
}

function scrollToInitialSection() {
  document.getElementById("initial-section").scrollIntoView({
    behavior: "smooth",
  });
}

const contactInputs = [
  {
    id: "input-email",
    validate: validateEmailInput,
  },
  {
    id: "input-name",
    validate: validateNameInput,
  },
  {
    id: "input-message",
    validate: validateMessageInput,
  },
];

function addErrorMessageToInput(input, message) {
  const inputContainer = input.parentElement;
  const inputGroup = inputContainer.parentElement;
  const errorMessageElement =
    inputGroup.getElementsByClassName("error-message")[0];

  inputContainer.classList.add("error-input");
  errorMessageElement.innerHTML = message;
}

function removeErrorMessageToInput(input) {
  const inputContainer = input.parentElement;
  const inputGroup = inputContainer.parentElement;
  const errorMessageElement =
    inputGroup.getElementsByClassName("error-message")[0];

  inputContainer.classList.remove("error-input");
  errorMessageElement.innerHTML = "";
}

function generateValidateResponse(message) {
  return {
    isValid: !Boolean(message),
    message,
  };
}

function validateEmailInput(input) {
  const value = input.value;
  if (value.includes("@")) {
    return generateValidateResponse();
  } else {
    return generateValidateResponse("Invalid email!");
  }
}

function validateNameInput(input) {
  const value = input.value;
  if (value.includes(" ")) {
    return generateValidateResponse();
  } else {
    return generateValidateResponse("Insert full name!");
  }
}

function validateMessageInput(input) {
  const value = input.value;
  if (value) {
    return generateValidateResponse();
  } else {
    return generateValidateResponse("Insert message!");
  }
}

function sendMessage() {
  let isValid = true;

  for (let i = 0; i < contactInputs.length; i++) {
    const contactInput = contactInputs[i];
    const inputId = contactInput.id;
    const inputElement = document.getElementById(inputId);
    const validationResponse = contactInput.validate(inputElement);

    if (validationResponse.isValid) {
      removeErrorMessageToInput(inputElement);
    } else {
      isValid = false;
      addErrorMessageToInput(inputElement, validationResponse.message);
    }
  }

  if (isValid) {
    alert("Message sent!");
  }
}
