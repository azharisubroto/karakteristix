import Head from 'next/head'
import SocialLogins from '@/components/SocialLogins'
import LoginForm from '@/components/LoginForm'
import FrontLayout from '@/layouts/FrontLayout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome | {process.env.SITENAME}</title>
      </Head>

      <main>
        <FrontLayout>
          <div className="mt-5 pt-5">
            {/* Sign Head */}
            <Row className="justify-content-between">
              <Col md="6">
                <h1 className="titleSignIn mb-0">Sign In</h1>
              </Col>
              <Col md="3">
                <Link href="/register/" passHref>
                  <a className="text-14">
                    <span>
                      Belum punya akun? <br />
                      <b>Sign Up</b> sekarang.
                    </span>
                  </a>
                </Link>
              </Col>

              <Col lg="12" className="mt-3">
                <SocialLogins />
              </Col>

              <Col lg="12" className="mt-4">
                <div className="text-18 text-gray">Atau gunakan akun email-mu</div>
              </Col>
            </Row>
          </div>

          <LoginForm />
        </FrontLayout>
      </main>

      <style jsx>{`
        main {
          background: #fff url('../img/signin.png') no-repeat center bottom;
          background-size: 100% auto;
          min-height: 100vh;
        }
      `}</style>
    </>
  )
}
