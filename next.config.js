const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // Add basePath if you're not using a custom domain
  // basePath: '/your-repo-name',
  // This adds the trailing slash to URLs
  trailingSlash: true,
};

module.exports = withContentlayer(nextConfig);
