import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import Button from '@/components/Button'

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
            <Link href="/login" passHref>
              <a>
                <Button type="outlined">SIGN UP</Button>
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
          padding: 1.25rem 1rem;
        }
      `}</style>
    </header>
  )
}

export default NavBar
