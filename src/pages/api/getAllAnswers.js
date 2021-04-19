import withSession from '@/utils/session'
import axios from 'axios'

export default withSession(async (req, res) => {
  const user = req.session.get('user')
  const access_token = user.token.access_token

  try {
    const response = await axios.post(
      process.env.API_URL + '/api/getAllAnswers',
      {
        form_id: 0
      },
      {
        headers: {
          Accept: 'application/json',
          Content_Type: 'application/json',
          Authorization: 'Bearer ' + access_token
        }
      }
    )
    const data = await response.data
    // console.log(data)

    // Send response
    res.json(data)
  } catch (error) {
    const { response: fetchResponse } = error
    res.status(fetchResponse?.status || 500).json(error)
    //res.json(error)
  }
})
