import type { Metadata } from "next";

import { Lora } from "next/font/google"; //font

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Head from "next/head";

import "./globals.css";


const font = Lora({ subsets: ["latin"] }); //font

export const metadata: Metadata = {
  title: "Sweet Jane's Honey",
  description: "Nonprofit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <body className={`xl:px-9 2xl:px-36 bg-sky-200 ${font.className}`}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
