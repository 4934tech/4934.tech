// noinspection SpellCheckingInspection

import type { Metadata } from "next";
import { Geist } from 'next/font/google';
import { Azeret_Mono } from 'next/font/google';
import "@/styles/globals.css";
import NavBar from "../features/NavBar/components";
import DynamicBackground from "@/components/DynamicBackground";
import Footer from "../features/Footer/components";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const azeretMono = Azeret_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "4934 Tech",
    description: "A transparent, open source, friendly community organization for makers.",
    authors: [
        { name: 'Olav "Olavorw" Sharma', url: "https://olavorw.com" }
    ],
    keywords: [
        "4934", "Tech", "Community", "Makers", "Olavorw", "Olav Sharma", "Olanorw",
        "Programming", "Coding", "Software", "Development", "Web", "App", "Mobile",
        "Game", "AI", "Machine Learning", "UltraAgent"
    ],
    icons: {
        icon: [
            { url: '/favicon.ico?v=1.1', sizes: '32x32' },
        ],
    },
    openGraph: {
        title: "4934 Tech",
        description: "A transparent, open source, friendly community organization for makers.",
        url: "https://4934.tech",
        siteName: "4934 Tech",
        images: [
            {
                url: "https://4934.tech/Logo/4934sqbd.png",
                width: 1024,
                height: 1024,
                alt: "4934 Tech Index",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "4934 Tech",
        description: "A transparent, open source, friendly community organization for makers.",
        images: ["https://4934.tech/Logo/4934sqbd.png"],
        creator: "@4934tech",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`dark ${geistSans.variable} ${azeretMono.variable}`}>
        <body className="font-sans antialiased bg-gray-950 text-gray-100 flex flex-col min-h-screen">
        <NavBar />
        <DynamicBackground />
        <main className="flex-grow pt-16 z-10 relative">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}

