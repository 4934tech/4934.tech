import type { Metadata } from "next";
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google';
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import DynamicBackground from "@/components/DynamicBackground";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "4934 Tech",
    description: "Join 4934 Tech, a leading community organization for makers, coders, and AI enthusiasts.",
    authors: [
        { name: 'Olav "Olavorw" Sharma', url: "https://olavorw.com" }
    ],
    keywords: [
        "4934", "Tech", "Community", "Makers", "Olavorw", "Olav Sharma", "Olanorw",
        "Programming", "Coding", "Software", "Development", "Web", "App", "Mobile",
        "Game", "AI", "Machine Learning", "UltraAgent"
    ],
    icons: {
        icon: "/favicon/4934sqg.ico",
        apple: "/logo/4934sqbd.png",
        shortcut: "/logo/4934sqbd.png",
    },
    openGraph: {
        title: "4934 Tech",
        description: "Join 4934 Tech, a leading community organization for makers, coders, and AI enthusiasts.",
        url: "https://4934.tech",
        siteName: "4934 Tech",
        images: [
            {
                url: "/logo/4934sqbd.png",
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
        title: "4934 Tech - Community of Makers",
        description: "Join 4934 Tech, a leading community organization for makers, coders, and AI enthusiasts.",
        images: ["/logo/4934sqbd.png"],
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
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-gray-100`}
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

