// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src : "/dist",
    public : "/"
  },
  alias: {
    "components": "./src/components"
  },
  plugins: [
  ],
  packageOptions: {
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
