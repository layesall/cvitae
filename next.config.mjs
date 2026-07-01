/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/cvitae' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig