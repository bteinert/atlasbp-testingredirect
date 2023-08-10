const { withFaust, getWpHostname } = require('@faustwp/core');
/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/sample-page",
          destination: "http://brandonteinert.com/sample-page/",
        },
      ],
    };
  },
});


