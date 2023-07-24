import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./components/NavBar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="de_GE" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body
        className={`${inter.className}
        bg-white
        mx-2
        p-2`}
      >
        <NavBar />
        <>{children}</>
      </body>
      <Analytics />
    </html>
  );
}
