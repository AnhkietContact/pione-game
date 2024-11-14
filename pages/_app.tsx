import Head from "next/head";
import { Fragment, useEffect } from "react";
import { AppProps } from "next/app";
import { innerTheme } from "../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";
import Toaster from "./ToastContainer";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import CSS của AOS
import React from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Khởi tạo AOS khi ứng dụng tải
    AOS.init({
      duration: 1000, // Thời gian hiệu ứng
      once: true, // Chạy một lần khi phần tử xuất hiện
    });

    // Dọn dẹp khi component bị unmount
    return () => {
      AOS.refresh(); // Cập nhật lại AOS khi cần thiết
    };
  }, []);

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
