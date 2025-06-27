/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  ...(process.env.NODE_ENV === 'development' && {
    async rewrites() {
      return [
        {
          source: '/client/:path*',
          destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`,
        },
        {
          source: '/filtering/:path*',
          destination: `${process.env.NEXT_PUBLIC_FILTERING_API_BASE_URL}/:path*`,
        },
      ];
    },
  }),
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
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
