import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import fetch from '@/utils/fetchJson'
import { SWRConfig } from 'swr'
import '../styles/globals.scss'
import Head from 'next/head'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
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

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  const GFont =
    'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'

  return (
    <>
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
    </>
  )
}

export default MyApp
