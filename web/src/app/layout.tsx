import ClientLayout from "@/components/ClientLayout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { NextUIProvider, Link } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
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
    <html lang="en">
      <body className={inter.className}>

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
