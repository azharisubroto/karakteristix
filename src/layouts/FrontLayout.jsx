import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from '@/components/NavBar'

const MemberLayout = (props) => {
  const { children } = props

  return (
    <>
      {/* Main Navbar */}
      <NavBar />

      <Container>
        <Row className="justify-content-between">
          <Col md="7"></Col>
          <Col md="5">{children}</Col>
        </Row>
      </Container>
    </>
  )
}

export default MemberLayout
