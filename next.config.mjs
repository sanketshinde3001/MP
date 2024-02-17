/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"pros.weddingpro.com",
            },
        ],
    },
};

export default nextConfig;

