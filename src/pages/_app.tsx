import { AppProps } from "next/app";
import "../../styles/globals.css"; // Import global styles
import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";

const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
         <meta
              name="description"
              content={`Safe Returns`}
            />
            <meta name="keywords" content="Safe Returns" />
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
      </Head>
      <Component
        className={`${geistSans.variable} ${geistMono.variable}`}
        {...pageProps}
      />
    </>
  );
};

export default MyApp;
