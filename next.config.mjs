/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
  },
};

export default nextConfig;

