import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Sidebar from '@/components/Sidebar'

const MemberLayout = (props) => {
  const { children } = props

  return (
    <>
      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md="4" lg="3" className="ps-0">
            <Sidebar />
          </Col>

          {/* Main Content */}
          <Col md="8" lg="9">
            <div className="px-md-4 py-md-4">{children}</div>
          </Col>
        </Row>
      </Container>

      <style global jsx>{`
        body {
          background: #fbfbfb;
        }
      `}</style>
    </>
  )
}

export default MemberLayout
