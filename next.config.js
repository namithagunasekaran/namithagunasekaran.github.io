
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    images: {
        loader: "akamai",
        path: "",
    },
    basePath: "",
    assetPrefix: "",
};

module.exports = nextConfig;