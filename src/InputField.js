import React from "react";

const InputField = ({
  id,
  label,
  type,
  onChange,
  placeholder,
  required,
  isValid,
  activated,
  message,
  value
}) => {
  const validityClass = isValid ? "valid-field" : "invalid-field",
    activatedClass = activated ? "activated" : "",
    classes = "form-group " + validityClass + " " + activatedClass;
  return (
    <div className={classes}>
      <label htmlFor={id}>
        {label}
        <span className="required-star">{required ? "*" : ""}</span>
      </label>
      <input
        type={type}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      <p className="message">{message}</p>
    </div>
  );
};

export default InputField;
