/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  basePath:
    process.env.NODE_ENV !== "development" ? "/politics-and-business" : "",
  assetPrefix:
    process.env.NODE_ENV !== "development" ? "/politics-and-business/" : "/",
  // basePath: "/politics-and-business",
  // assetPrefix: "/politics-and-business/",
  images: {
    unoptimized: true
  },
  env: {
    BASE_PATH:
      process.env.NODE_ENV !== "development" ? "/politics-and-business" : "",
    HOST:
      process.env.NODE_ENV !== "development"
        ? "http://wevisdemo.github.io"
        : "",
    SECURE_HOST:
      process.env.NODE_ENV !== "development"
        ? "https://wevisdemo.github.io"
        : "",
    NETLIFY_NEXT_PLUGIN_SKIP: true
  }
};

module.exports = nextConfig;
