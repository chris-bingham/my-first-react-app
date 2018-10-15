// import React from 'react';
let lastPassword;

const numbersRegex = /\d/,
  lettersRegex = /[A-Za-z]+/,
  lettersAndNumbersRegex = /[A-Za-z0-9]+/;

const validateEmail = email => {
  if (email.includes("@") && lettersAndNumbersRegex.test(email)) {
    return {
      result: true,
      message: " "
    };
  }

  return {
    result: false,
    message: "Email address not valid"
  };
};

const validatePassword = password => {
  lastPassword = password;
  const hasLetter = lettersRegex.test(password),
    hasNumber = numbersRegex.test(password),
    isCorrectLength = password.length > 7;

  if (hasLetter && hasNumber && isCorrectLength) {
    return {
      result: true,
      message:
        "Password must be atleast 8 chars and contain a letter and a number"
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
      return { result: true };
  }
};

export default Validate;
