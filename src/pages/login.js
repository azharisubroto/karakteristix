import Head from 'next/head'
import LazyLoad from 'react-lazyload'
import Login from '@/components/Login'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome | {process.env.SITENAME}</title>
      </Head>

      <LazyLoad height={528} once offset={100}>
        <Login />
      </LazyLoad>
    </>
  )
}
