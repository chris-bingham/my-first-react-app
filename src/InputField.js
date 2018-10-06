import React from "react";

const InputField = ({ id, label, type, handleInput }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} onChange={handleInput} />
    </div>
  );
};

export default InputField;
