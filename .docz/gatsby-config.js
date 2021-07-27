const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Kx Nextjs',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Users\\bounche\\repos\\kx-new\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Kx Nextjs',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\bounche\\repos\\kx-new',
          templates:
            'C:\\Users\\bounche\\repos\\kx-new\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\bounche\\repos\\kx-new\\.docz',
          cache: 'C:\\Users\\bounche\\repos\\kx-new\\.docz\\.cache',
          app: 'C:\\Users\\bounche\\repos\\kx-new\\.docz\\app',
          appPackageJson: 'C:\\Users\\bounche\\repos\\kx-new\\package.json',
          appTsConfig: 'C:\\Users\\bounche\\repos\\kx-new\\tsconfig.json',
          gatsbyConfig: 'C:\\Users\\bounche\\repos\\kx-new\\gatsby-config.js',
          gatsbyBrowser: 'C:\\Users\\bounche\\repos\\kx-new\\gatsby-browser.js',
          gatsbyNode: 'C:\\Users\\bounche\\repos\\kx-new\\gatsby-node.js',
          gatsbySSR: 'C:\\Users\\bounche\\repos\\kx-new\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\bounche\\repos\\kx-new\\.docz\\app\\imports.js',
          rootJs: 'C:\\Users\\bounche\\repos\\kx-new\\.docz\\app\\root.jsx',
          indexJs: 'C:\\Users\\bounche\\repos\\kx-new\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\bounche\\repos\\kx-new\\.docz\\app\\index.html',
          db: 'C:\\Users\\bounche\\repos\\kx-new\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
