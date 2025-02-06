// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images :{
//     domains :["cdn.sanity.io"]
//   }
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {

  eslint: {
      ignoreDuringBuilds: true,
  },

};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       { protocol: 'https', hostname: 'cdn.sanity.io' },
//     ],
//   },
// };

// export default nextConfig;

