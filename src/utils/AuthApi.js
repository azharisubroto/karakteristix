import axios from 'axios'
import withSession from '@/utils/session'

export default withSession(async (req) => {
  const user = req.session.get('user')
  const access_token = user.token.access_token

  return axios.create({
    baseURL: process.env.API_URL, //localhost:8080/wp-json/ : prod: azhdev.com.au/wp-json/
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + access_token,
      'Content-Type': 'application/json'
    }
  })
})
