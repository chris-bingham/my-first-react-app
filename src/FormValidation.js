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
    case "password":
      return validatePassword(field.value);
    case "confirmPassword":
      return validateConfirmPassword(field.value);
    default:
      return true;
  }
};

export default Validate;
