import axios from 'axios'
import useUser from '@/utils/useUser'

const AuthApi = () => {
  const { user } = useUser({ redirectTo: '/login' })

  return axios.create({
    baseURL: process.env.API_URL, //localhost:8080/wp-json/ : prod: azhdev.com.au/wp-json/
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + user.token.access_token,
      'Content-Type': 'application/json'
    }
  })
}

export default AuthApi
