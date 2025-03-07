/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  distDir: "dist",
  images: {
    unoptimized: true, },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
    
    reactStrictMode: true,
    
    },
  
};

export default nextConfig;

