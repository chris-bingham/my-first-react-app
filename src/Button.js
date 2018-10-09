import React from "react";

const Button = ({ id, type, label, handleClick, form, disabled }) => {
  return (
    <button
      type={type}
      form={form}
      id={id}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
