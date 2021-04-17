import services from '@/utils/services'

export default async (req, res) => {
  const { first_name, last_name, email, password } = await req.body

  const payload = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password
  }

  await services.userRegister(payload).then((rex) => {
    console.log(rex)

    // Send response
    res.json(rex)
  })

  // try {

  // } catch (error) {
  //   const { response: fetchResponse } = error
  //   res.status(fetchResponse?.status || 500).json(error)
  //   //res.json(error)
  // }
}
