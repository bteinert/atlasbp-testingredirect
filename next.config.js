const { withFaust, getWpHostname } = require('@faustwp/core');
/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['node_modules'],
  },
  images: {
    domains: [getWpHostname()],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async rewrites() {
    return [
      {
        source: "/sample-page/",
        destination: "https://brandonteinert.wpengine.com/sample-page/",
      },
      {
        source: "/ducks",
        destination: "https://wpengine.com/wordpress-hosting",
      },
      {
        source: "/testing-proxy-pass",
        destination: "https://bpatlasbptesti.wpengine.com/testing-proxy-pass",
      },
      {
        source: "/bt-testing-proxy-pass",
        destination: "http://brandonteinert.wpengine.com/bt-testing-proxy-pass",
      },
    ]
  }
  });


