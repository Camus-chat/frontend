/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: "https://api.camus.life/:path*",
            },
        ];
    },
};

export default nextConfig;
