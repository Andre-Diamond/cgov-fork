import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Alias the UMD/CJS cardano-peer-connect package to an ESM-friendly shim
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias["@fabianbormann/cardano-peer-connect"] = path.resolve(
      __dirname,
      "src/lib/cardanoPeerConnectShim.ts"
    );
    return config;
  },
};

export default nextConfig;
