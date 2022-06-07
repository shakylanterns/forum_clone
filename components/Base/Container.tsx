import React from "react";

type Props = {
  children: JSX.Element;
};

const Container = ({ children }: Props) => {
  return (
    <div className="mx-auto" style={{ width: "80%" }}>
      {children}
    </div>
  );
};

export default Container;
