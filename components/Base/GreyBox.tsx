import React from "react";

type Props = {
  children: JSX.Element | string;
};

const GreyBox = ({ children }: Props) => {
  return (
    <div className="bg-white border-2 border-gray-200 p-4">{children}</div>
  );
};

export default GreyBox;
