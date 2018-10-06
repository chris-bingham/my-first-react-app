import React from "react";

const Button = ({ id, type, label, handleClick, form }) => {
  return (
    <button type={type} form={form} id={id} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
