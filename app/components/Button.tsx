"use client";
import React, { useState } from "react";

interface ButtonProps {
  buttonColor: string;
  buttonSize?: number;
  clicked: number;
}

const Button: React.FC<ButtonProps> = ({
  buttonColor,
  buttonSize,
  clicked,
}) => {
  const buttonStyles = `bg-${buttonColor}-500 hover:bg-${buttonColor}-700 text-white border border-${buttonColor}-600 font-bold py-2 px-4 rounded`;

  const [clickedBtn, setClickedBtn] = useState(clicked);

  return (
    <button
      className={buttonStyles}
      onClick={() => setClickedBtn(clickedBtn + 1)}
    >
      {clickedBtn}
    </button>
  );
};

export default Button;
