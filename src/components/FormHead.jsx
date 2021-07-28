import PropTypes from 'prop-types'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SocialLogins from './SocialLogins'

/**
 * @classdesc
 * Component for form Adornment
 *
 * @category UI
 * @component
 * @example <caption>Sign In</caption>
 * return(
 *  <div className="pb-4" style={{width: '100%'}}><FormHead type="login" /></div>
 * )
 *
 * @example <caption>Sign Up</caption>
 * return(
 *  <div className="pb-4" style={{width: '100%'}}><FormHead type="signup" /></div>
 * )
 * @return {React.ReactElement} - React component
 */
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
                  <strong className="text-primary">Sign Up</strong> sekarang.
                </span>
              ) : (
                <span>
                  Anda sudah jadi anggota? <br />
                  <strong className="text-primary">Log In</strong> di sini.
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

      <style jsx>{`
        .titleSignIn {
          font-weight: 700;
          font-size: 30px;
          color: #00326b;
        }
      `}</style>
    </>
  )
}

FormHead.propTypes = {
  /**
   * Type of login form. <code>login</code> or <code>signup</code>
   */
  type: PropTypes.oneOf(['login', 'signup']).isRequired
}

export default FormHead
