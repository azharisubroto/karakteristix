import SocialLogins from '@/components/SocialLogins'
import RegisterForm from '@/components/RegisterForm'
import FrontLayout from '@/layouts/FrontLayout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormHead from '@/components/FormHead'

export default function Home() {
  return (
    <>
      <main>
        <FrontLayout>
          {/* Form Header */}
          <div className="pt-3 pt-md-4">
            {/* Sign Head */}
            <FormHead type="register" />

            <Row className="justify-content-between">
              <Col lg="12" className="mt-3">
                <SocialLogins />
              </Col>

              <Col lg="12" className="mt-4">
                <div className="text-18 text-gray">Atau gunakan akun email-mu</div>
              </Col>
            </Row>
          </div>

          {/* Form render */}
          <div className="pb-4">
            <RegisterForm />
          </div>
        </FrontLayout>
      </main>

      <style jsx>{`
        main {
          background: #fff url('../img/Sign_Up2x.ed04a4fe.png') no-repeat center bottom;
          background-size: 100% auto;
          min-height: 100vh;
        }
      `}</style>
    </>
  )
}
