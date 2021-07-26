import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import fetch from '@/utils/fetchJson'
import { SWRConfig } from 'swr'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import '../styles/globals.scss'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00326b'
    },
    secondary: {
      main: '#707070'
    },
    background: {
      default: '#fff'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Open Sans',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})

const cache = createCache({ key: 'css' })
cache.compat = true

function KxApp({ Component, pageProps }) {
  const GFont =
    'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'

  return (
    <CacheProvider value={cache}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preload" as="style" href={GFont} />
        <link href={GFont} rel="stylesheet" />
      </Head>
      <SWRConfig
        value={{
          fetcher: fetch,
          onError: (err) => {
            console.error(err)
          }
        }}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </SWRConfig>
    </CacheProvider>
  )
}

KxApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default KxApp
