import SocialLogins from '@/components/SocialLogins'
import LoginForm from '@/components/LoginForm'
import FrontLayout from '@/layouts/FrontLayout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormHead from '@/components/FormHead'

export default function Home() {
  return (
    <>
      <main>
        <FrontLayout>
          <div className="pt-3 pt-md-4">
            {/* Sign Head */}
            <FormHead type="login" />

            <Row className="justify-content-between">
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
