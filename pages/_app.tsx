import Head from "next/head";
import { Fragment } from "react";
import { AppProps } from "next/app";
import { innerTheme } from "../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";
import Toaster from "./ToastContainer";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <title>Pione Game</title>
      </Head>
      <ThemeProvider theme={innerTheme}>
        <Component {...pageProps} />
        <Toaster />
      </ThemeProvider>
    </Fragment>
  );
};

export default MyApp;
