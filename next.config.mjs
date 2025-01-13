/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    output: 'standalone',
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: `${process.env.CLIENT_SIDE_FETCH_URL}/:path*`,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'camusbucket.s3.ap-northeast-2.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
