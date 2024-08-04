/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'picsum.photos'
            },
            {
                protocol: "https",
                hostname: 'img.clerk.com'
            }
        ]
    }
};

export default nextConfig;
