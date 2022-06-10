import React from "react";

type Props = {
  children: JSX.Element | string;
  needPadding?: boolean;
  additionalClasses?: string;
};

const GreyBox = ({
  children,
  needPadding = true,
  additionalClasses,
}: Props) => {
  return (
    <div
      className={`bg-white border-2 border-gray-200 ${
        needPadding ? "p-4" : ""
      } ${additionalClasses}`}
    >
      {children}
    </div>
  );
};

export default GreyBox;
