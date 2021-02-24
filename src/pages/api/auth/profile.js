import withSession from '@/utils/session'
import axios from 'axios'

export default withSession(async (req, res) => {
  const user = req.session.get('user')
  const access_token = user.token.access_token

  try {
    const response = await axios.get(process.env.API_URL + '/api/userDetail', {
      headers: {
        Accept: 'application/json',
        Content_Type: 'application/json',
        Authorization: 'Bearer ' + access_token
      }
    })
    const data = await response.data

    req.session.set('user', data)
    await req.session.save()

    // Send response
    res.json(data)
  } catch (error) {
    const { response: fetchResponse } = error
    res.status(fetchResponse?.status || 500).json(error)
    //res.json(error)
  }
})
