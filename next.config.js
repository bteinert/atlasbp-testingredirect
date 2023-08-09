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
  const rewrites = () => {
    return [
      {
        source: "/sample-page",
        destination: "https://bpatlasbptesti.wpengine.com/sample-page",
      },
      {
        source: "/ducks",
        destination: "https://random-d.uk/api/random",
      },
    ];
  };
  return {
    rewrites,
  };
  /**async rewrites() {
    return [
      {
        source: '/sample-page',
        destination: 'https://bpatlasbptesti.wpengine.com/sample-page',
      },
    ]
  }, **/ 
});
