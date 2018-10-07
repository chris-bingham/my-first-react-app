import React from "react";

const InputField = ({ id, label, type, handleInput, placeholder, required }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} onChange={handleInput} placeholder={placeholder}/>
    </div>
  );
};

export default InputField;
