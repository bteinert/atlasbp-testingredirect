const { withFaust, getWpHostname } = require('@faustwp/core');
/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  trailingSlash: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/sample-page",
          destination: "http://bpatlasbptesti.wpenginepowered.com/sample-page",
        },
        {
          source: "/sample-page/",
          destination: "http://bpatlasbptesti.wpenginepowered.com/sample-page/",
        },
      ],
    };
  },
});


