/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "loremflickr.com",
          port: "", // Keep empty if there’s no port
          pathname: "/**",
        },
      ],
      dangerouslyAllowSVG: true, // If any images are SVGs
      minimumCacheTTL: 60, // Ensures updates
    },
  };
  
  console.log("✅ Next.js config loaded:", nextConfig);
  
  module.exports = nextConfig;
  