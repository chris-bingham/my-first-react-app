// import React from 'react';

const validatePassword = password => {
    return password.length > 6;
}

const validateEmail = email => {
    return email.includes("@");
}

const Validate = (field) => {
    switch (field.validation) {
        case "email":
            return validateEmail(field.value);
        break;
        case "password":
            return validatePassword(field.value);
        break;

        default:
            return true;
        break

    }
}

export default Validate;

