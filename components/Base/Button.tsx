import React from "react";

type Props = {
  children: JSX.Element | string;
  onClick?: React.MouseEventHandler;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className="bg-brand text-white py-2 px-5 inline-block"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
