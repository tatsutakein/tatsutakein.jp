import { fileURLToPath } from "url";
import _jiti from "jiti";

const jiti = _jiti(fileURLToPath(import.meta.url));

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
jiti("./src/env");
jiti("@tatsutakeinjp/auth/env");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@tatsutakeinjp/api",
    "@tatsutakeinjp/auth",
    "@tatsutakeinjp/db",
    "@tatsutakeinjp/ui",
    "@tatsutakeinjp/validators"
  ],

  /** We already do linting and typechecking as separate tasks in CI */
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dk0taoori0pbd.cloudfront.net",
        port: ""
      }
    ]
  }
};

export default config;
