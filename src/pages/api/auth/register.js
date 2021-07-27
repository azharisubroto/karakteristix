import services from '@/utils/services'

export default async (req, res) => {
  const payload = await req.body

  await services.userRegister(payload).then((rex) => {
    console.log(rex.data)

    // Send response
    res.json(rex.data)
  })
}
