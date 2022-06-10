import React from "react";

type Props = {
  children: JSX.Element | string;
  onClick?: React.MouseEventHandler;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

const Button = ({ children, onClick, type }: Props) => {
  return (
    <button
      className="bg-brand text-white py-2 px-5 inline-block"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
