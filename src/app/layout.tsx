import type { Metadata } from "next";
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google';
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import DynamicBackground from "../components/DynamicBackground";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "4934.tech",
    description: "4934.tech is a website made by Olav \"Olavorw\" Sharma. Generated by create next app.",
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
        <NavBar />
        <DynamicBackground />
        <main className="pt-16 z-16">
            {children}
        </main>
        </body>
        </html>
    );
}

