/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    AUTH_SECRET: process.env.AUTH_SECRET || "",
    SITE_URL: process.env.SITE_URL,
    API_URL: process.env.API_URL,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  trailingSlash: true,
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test?.(".svg")
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

module.exports = nextConfig
