import React from "react";

type Props = {
  children: JSX.Element | string;
  needPadding?: boolean;
};

const GreyBox = ({ children, needPadding = true }: Props) => {
  return (
    <div
      className={`bg-white border-2 border-gray-200 ${
        needPadding ? "p-4" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default GreyBox;
