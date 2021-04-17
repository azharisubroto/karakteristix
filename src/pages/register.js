import Head from 'next/head'
import LazyLoad from 'react-lazyload'
import Register from '@/components/Register'

export default function Home() {
  return (
    <>
      <Head>
        <title>Register | {process.env.SITENAME}</title>
      </Head>

      <LazyLoad height={528} once offset={100}>
        <Register />
      </LazyLoad>
    </>
  )
}
