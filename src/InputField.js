import React from "react";

const InputField = ({
  id,
  label,
  type,
  handleInput,
  placeholder,
  required,
  isValid,
  activated
}) => {
  const validityClass = isValid ? "valid-field" : "invalid-field",
    activatedClass = activated ? "activated" : "",
    classes = validityClass + " " + activatedClass;
  return (
    <div className="form-group">
      <label htmlFor={id}>
        {label}
        <span className="required-star">{required ? "*" : ""}</span>
      </label>
      <input
        type={type}
        id={id}
        onChange={handleInput}
        placeholder={placeholder}
        className={classes}
      />
    </div>
  );
};

export default InputField;
