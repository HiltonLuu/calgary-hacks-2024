import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import { UserProvider } from "./context/userContext";
import React from "react";
=======
import Sidebar from "./_components/sidebar"
>>>>>>> 99b475366f8704eab126083f621e928c0344b707

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <UserProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </UserProvider>
=======
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
>>>>>>> 99b475366f8704eab126083f621e928c0344b707
  );
}
