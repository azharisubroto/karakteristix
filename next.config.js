const withPWA = require('next-pwa')

const withPreact = (next = {}) =>
  Object.assign({}, next, {
    webpack(config, options) {
      const { dev, isServer } = options

      // Use Preact only in client production bundle.
      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom': 'preact/compat',
          'create-react-class': 'preact-compat/lib/create-react-class',
          'react-dom-factories': 'preact-compat/lib/react-dom-factories'
        })
      }

      if (typeof next.webpack === 'function') {
        return next.webpack(config, options)
      }

      return config
    }
  })

module.exports = withPWA(
  withPreact({
    env: {
      SITENAME: process.env.SITENAME,
      API_URL: process.env.API_URL,
      SECRET_COOKIE_PASSWORD: process.env.SECRET_COOKIE_PASSWORD
    },
    eslint: {
      ignoreDuringBuilds: true
    },
    images: {
      domains: ['karakteristix.com']
    },
    pwa: {
      disable: process.env.NODE_ENV === 'development',
      dest: 'public',
      register: true,
      scope: '/'
    },
    generateEtags: true,
    poweredByHeader: false,
    compress: true,
    trailingSlash: false,
    async redirects() {
      return [
        {
          source: '/',
          destination: '/login',
          permanent: true
        }
      ]
    }
  })
)
