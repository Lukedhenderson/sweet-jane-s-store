import type { Metadata } from "next";

import { Lora } from "next/font/google"; //font

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

import "./globals.css";
import Landing from "@/components/landingdiv";



const font = Lora({ subsets: ["latin"] }); //font

export const metadata: Metadata = {
  title: "Handsome Llama",
  description: "Handsome Llama store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`xl:px-9 2xl:px-36 bg-[AntiqueWhite] ${font.className}`}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
