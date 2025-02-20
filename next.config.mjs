const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    images: {
        unoptimized: true, // Désactive l'optimisation des images
      },
  output: "export",
  basePath: isProd ? "/portfolio_bts" : "",
  assetPrefix: isProd ? "/portfolio_bts/" : "",
};

export default nextConfig;
