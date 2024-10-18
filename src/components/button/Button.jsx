import React from "react";

const Button = ({ text, value }) => {
  return (
    <button
      className="w-full flex justify-center items-center h-10 p-6 text-primary bg-accent rounded-lg hover:bg-accent/80 transition-colors ease-in-out duration-300"
      value={value}
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;
