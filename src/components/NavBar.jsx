import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import Button from '@material-ui/core/Button'

const NavBar = () => {
  return (
    <header>
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md="3">
            <Link href="/">
              <a>
                <img src="/img/logo.svg" alt="Logo" />
              </a>
            </Link>
          </Col>
          <Col md="3" className="text-right">
            <Link href="/register" passHref>
              <a>
                <Button size="large" variant="outlined" color="secondary" style={{ borderRadius: 90 }}>
                  <span className="d-block px-4 text-primary">
                    <strong>SIGN UP</strong>
                  </span>
                </Button>
              </a>
            </Link>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        header {
          margin-bottom: 0;
          background-color: #f8f9fa;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05), inset 0 -1px 0 rgba(0, 0, 0, 0.1);
          padding: 1rem 1rem;
        }
      `}</style>
    </header>
  )
}

export default NavBar
