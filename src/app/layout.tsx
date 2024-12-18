import type { Metadata } from "next";
import { Geist, Azeret_Mono } from 'next/font/google';
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import DynamicBackground from "@/components/DynamicBackground";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Azeret_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "4934 Tech",
    description: "4934 Tech, a leading community organization for makers, coders, and AI enthusiasts.",
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
            { url: '/favicon.ico', sizes: '32x32' },
        ],
    },
    openGraph: {
        title: "4934 Tech",
        description: "4934 Tech, a leading community organization for makers, coders, and AI enthusiasts.",
        url: "https://4934.tech",
        siteName: "4934 Tech",
        images: [
            {
                url: "https://4934.tech/logo/4934sqbd.png",
                width: 1024,
                height: 1024,
                alt: "4934 Tech Logo",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "4934 Tech",
        description: "4934 Tech, a leading community organization for makers, coders, and AI enthusiasts.",
        images: ["https://4934.tech/logo/4934sqbd.png"],
        creator: "@4934tech",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
        <body
            className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-gray-950 text-gray-100`}
        >
        <NavBar />
        <DynamicBackground />
        <main className="pt-16 z-10 relative">
            {children}
        </main>
        </body>
        </html>
    );
}

