// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
//     compiler: {
//         // Enables the styled-components SWC transform
//         styledComponents: true,
//     },
// };

// module.exports = nextConfig;
/**
   * @type {import('next').NextConfig}
   */
 const nextConfig   = {
    images: {
      loader: 'akamai',
      path: '',
    },
    assetPrefix: './',
  };
  
  export default   nextConfig;