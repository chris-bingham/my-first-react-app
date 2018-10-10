// import React from 'react';
let lastPassword;

const validateEmail = email => {
  return email.includes("@");
};

const validatePassword = password => {
  lastPassword = password;
  return password.length > 6;
};

const validateConfirmPassword = password => {
  return password === lastPassword && validatePassword(password);
};

const Validate = field => {
  switch (field.validation) {
    case "email":
      return validateEmail(field.value);
      break;
    case "password":
      return validatePassword(field.value);
      break;
    case "confirmPassword":
      return validateConfirmPassword(field.value);
      break;

    default:
      return true;
      break;
  }
};

export default Validate;
