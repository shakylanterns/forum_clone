import type { AppProps } from "next/app";
import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import "../styles/ibm-plex-sans.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <ToastContainer closeOnClick closeButton autoClose={4000} />
    </Fragment>
  );
}

export default MyApp;
