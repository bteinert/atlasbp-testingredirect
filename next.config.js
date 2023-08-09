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
  });
module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/sample-page/",
        destination: "https://brandonteinert.wpengine.com/sample-page/",
      },
      {
        source: "/ducks",
        destination: "https://random-d.uk/api/random",
      },
      {
        source: "/testing-proxy-pass/",
        destination: "https://bpatlasbptesti.wpengine.com/testing-proxy-pass/",
      },
      {
        source: "/bt-testing-proxy-pass/",
        destination: "https://brandonteinert.wpengine.com/bt-testing-proxy-pass/",
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
};

