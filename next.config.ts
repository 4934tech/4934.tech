import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '4934.tech',
                port: '',
                pathname: '/**',
            },
            {
                protocol: "https",
                hostname: "tailwindui.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
