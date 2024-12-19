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
        ],
    },
};

export default nextConfig;
