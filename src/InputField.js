import React from "react";

const InputField = ({
  id,
  label,
  type,
  handleInput,
  placeholder,
  required,
  isValid
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        onChange={handleInput}
        placeholder={placeholder}
        className={isValid ? "valid-field" : "invalid-field"}
      />
    </div>
  );
};

export default InputField;
