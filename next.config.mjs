const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: isProd ? "/portfolio_bts" : "",
  assetPrefix: isProd ? "/portfolio_bts/" : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Autres options si nécessaire
};

export default nextConfig;
