/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: `${process.env.CLIENT_SIDE_FETCH_URL}/:path*`,
            },
        ];
    },
};

export default nextConfig;
