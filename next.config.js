const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const urlPrefix = process.env.URL_PREFIX ? "/" + process.env.URL_PREFIX : "";
// next.config.js

/** @type {import('next').NextConfig} */
module.exports = {

};

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
    },
      reactStrictMode: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  ],
  

  // your other plugins here
]);
