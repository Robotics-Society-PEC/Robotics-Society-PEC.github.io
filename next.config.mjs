/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Allow all hostnames for HTTPS
        },
        {
          protocol: 'http',
          hostname: '**', // Allow all hostnames for HTTP
        },
      ],
    },
  };
  
  export default nextConfig;
  