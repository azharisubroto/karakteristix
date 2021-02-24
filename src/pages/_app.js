import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'
import fetch from '@/utils/fetchJson'
import { SWRConfig } from 'swr'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SWRConfig
        value={{
          fetcher: fetch,
          onError: (err) => {
            console.error(err)
          }
        }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  )
}

export default MyApp
