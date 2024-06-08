import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import Link from "next/link"
import { Button } from "@/components/ui/button"

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

                <div className="flex flex-col min-h-screen">
                    <header className="bg-gray-900 text-white py-4 px-6 md:px-10">
                        <div className="container mx-auto flex items-center justify-between">
                            <Link className="text-xl font-bold" href="/">
                                Home Services Platform
                            </Link>
                            <nav className="hidden md:flex items-center space-x-6">
                                {/*<Link className="hover:underline" href="">
                                    Services
                                </Link>
                                <Link className="hover:underline" href="#foo">
                                    About
                                </Link>
                                <Link className="hover:underline" href="#">
                                    Contact
                                </Link>*/}
                            </nav>
                            <div className="flex items-center space-x-4">
                                <Button className="px-4 py-2 rounded-md text-black" variant="outline">
                                    Sign In
                                </Button>
                                <Button className="px-4 py-2 rounded-md">Sign Up</Button>
                            </div>
                        </div>
                    </header>

                    <main className="flex-1">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}