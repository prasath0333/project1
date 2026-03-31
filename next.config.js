module.exports = {
  reactStrictMode: true,
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // generates static HTML
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;