import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Ensure these packages are processed by Next's bundler so aliases apply
  transpilePackages: ["@meshsdk/react", "@fabianbormann/cardano-peer-connect"],
  webpack: (config) => {
    // Alias ONLY the bare module id (no subpaths) to our ESM-friendly shim
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias["@fabianbormann/cardano-peer-connect$"] = path.resolve(
      __dirname,
      "src/lib/cardanoPeerConnectShim.ts"
    );
    return config;
  },
};

export default nextConfig;
