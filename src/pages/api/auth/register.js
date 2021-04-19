import services from '@/utils/services'

export default async (req, res) => {
  const { first_name, last_name, email, password } = await req.body

  const payload = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password
  }

  // console.log(payload)

  await services.userRegister(payload).then((rex) => {
    console.log(rex)

    // Send response
    res.json(rex)
  })
}
