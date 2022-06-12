import Link from "next/link";
import React from "react";

type Props = {
  children: JSX.Element | string;
  onClick?: React.MouseEventHandler;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  href?: string;
};

const Button = ({ children, onClick, type, href }: Props) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <a className="bg-brand text-white py-2 px-5 inline-block text-center">
          {children}
        </a>
      </Link>
    );
  }
  return (
    <button
      className="bg-brand text-white py-2 px-5 inline-block text-center"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
