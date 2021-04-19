import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from '@/components/Card'
import fetchJson from '@/utils/fetchJson'
import dynamic from 'next/dynamic'
import Button from '@/components/Button'
const ChartCard = dynamic(() => import('@/components/ChartCard'), { ssr: false })

const DiagramCards = () => {
  const [allanswers, setAllanswers] = React.useState([])

  // did mount
  React.useEffect(() => {
    getAllAnswers()
  }, [])

  /**
   * Get Answers
   */
  const getAllAnswers = async () => {
    try {
      const res = await fetchJson('/api/getAllAnswers', {
        method: 'GET'
      })
      console.log(res)
      if (res.success === true) {
        setAllanswers(res.data[0])
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="text-24">
          <strong>
            Total Databases: <span className="text-primary">{allanswers[allanswers.length - 1].answers.size}</span>
          </strong>
        </div>

        <div>
          <Button variant="contained" color="primary" size="large">
            Export to Excel
          </Button>
        </div>
      </div>
      <Row>
        {allanswers.length > 0 &&
          allanswers.map((item, i) => {
            if (i !== allanswers.length - 1) {
              return (
                <Col lg={6} key={`question-${i}`} className="pb-5">
                  <Card headerText={item.question}>
                    <ChartCard object={item} />
                  </Card>
                </Col>
              )
            }
          })}
      </Row>

      {/* <pre>{JSON.stringify(allanswers, null, 2)}</pre> */}
    </>
  )
}

export default DiagramCards
