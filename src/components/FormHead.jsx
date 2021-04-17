import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SocialLogins from '@/components/SocialLogins'

const FormHead = (props) => {
  const { type } = props
  return (
    <>
      <div className="d-flex justify-content-between align-items-top pt-md-5">
        <div>
          <h1 className="titleSignIn mb-0">{type === 'login' ? 'Sign In' : 'Sign Up'}</h1>
        </div>

        <div>
          <Link href={`/${type === 'login' ? 'register' : 'login'}`} passHref>
            <a className="text-14 text-grey">
              {type === 'login' ? (
                <span>
                  Belum punya akun? <br />
                  <b className="text-primary">Sign Up</b> sekarang.
                </span>
              ) : (
                <span>
                  Anda sudah jadi anggota? <br />
                  <b className="text-primary">Log In</b> di sini.
                </span>
              )}
            </a>
          </Link>
        </div>
      </div>

      <Row className="justify-content-between">
        <Col lg="12" className="mt-3">
          <SocialLogins />
        </Col>

        <Col lg="12" className="mt-4">
          <div className="text-18 text-gray">Atau gunakan akun emailmu</div>
        </Col>
      </Row>
    </>
  )
}

export default FormHead
