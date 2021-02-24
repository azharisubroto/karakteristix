import withSession from '@/utils/session'
import services from '@/utils/services'

export default withSession(async (req, res) => {
  const { email, password } = await req.body

  const payload = {
    email: email,
    password: password
  }

  try {
    const response = await services.userLogin(payload)
    const data = await response.data.data

    // Save user data
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
