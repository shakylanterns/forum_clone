import React from "react";

type Props = {
  children: JSX.Element | string;
  action: React.MouseEventHandler<HTMLButtonElement>;
};

const LinkButton = ({ children, action }: Props) => {
  return (
    <button
      className="text-brand underline hover:text-brand-darker"
      onClick={action}
    >
      {children}
    </button>
  );
};

export default LinkButton;
