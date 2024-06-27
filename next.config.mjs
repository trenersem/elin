/** @type {import('next').NextConfig} */
const nextConfig = {
    // distDir: 'build',
     experimental: {
         appDir: true,
         serverComponentsExternalPackages: ["mongoose"],
     },
    //  output: 'standalone',
//      webpack(config) {
//          config.experiments = {
//         ...config.experiments,
//         topLevelAwait: true,
//         }
//     return config
//   }
};

export default nextConfig;
