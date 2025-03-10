import 'react-toastify/dist/ReactToastify.css'
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import ContextProvider from "@/contexts/ContextProviders";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "QuickJob - 2.0",
  description: "Find a service quick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer autoClose={3000} />
        <Suspense>
          <ContextProvider>
            {children}
          </ContextProvider>
        </Suspense>
      </body>
    </html>
  );
}
