import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

const Document: React.FC<{}> = () => {
  return (
    <Html>
      <Head />
      <body className="bg-gray-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
