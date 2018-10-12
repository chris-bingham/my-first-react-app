// import React from 'react';
let lastPassword;

const numbersRegex = /\d/,
  lettersRegex = /[A-Za-z]+/;
// onlyLettersAndNumbersRegex = /[^A-Za-z0-9]+/;

const validateEmail = email => {
  return {
    result: email.includes("@")
  };
};

const validatePassword = password => {
  lastPassword = password;
  const hasLetter = lettersRegex.test(password),
    hasNumber = numbersRegex.test(password),
    isCorrectLength = password.length > 7;

  if (hasLetter && hasNumber && isCorrectLength) {
    return {
      result: true
    };
  } else if (isCorrectLength) {
    return {
      result: false,
      message: "Password must contain one letter and one number"
    };
  }
  return {
    result: false,
    message:
      "Password must be atleast 8 chars and contain a letter and a number"
  };
};

const validateConfirmPassword = password => {
  if (password === lastPassword) {
    return {
      result: true,
      message: "Passwords match"
    };
  }
  return {
    result: false,
    message: "Passwords don't match"
  };
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
