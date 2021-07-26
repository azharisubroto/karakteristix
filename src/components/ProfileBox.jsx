import useUser from '@/utils/useUser'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import axios from 'axios'

const ProfileBox = ({ className, ...other }) => {
  const { user } = useUser({ redirectTo: '/login' })

  if (!user) return <>Loading...</>

  // Update user
  // const updateuser = async () => {
  //   try {
  //     const response = await axios.get('/api/auth/profile')
  //     console.log(response)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div className={`ProfileBox ${className}`} {...other}>
      <Row>
        <Col md="2">
          <div className="avatar">
            <img src="/img/default-ava.jpg" alt={user ? user.data.first_name : 'user'} />
          </div>
        </Col>
        <Col md="10">
          <small>Welcome Back</small>
          <div>{user && <strong className="text-20">{user.data.first_name + ' ' + user.data.last_name}</strong>}</div>

          <div className="d-flex mt-3">
            <div className="me-4">
              Level: <strong>{user.data.level ? user.data.level : '0'}</strong>
            </div>
            <div>
              Point: <strong>{user.data.point}</strong>
            </div>
          </div>

          {/* <button onClick={updateuser}>Update user</button> */}
        </Col>
      </Row>
      <style jsx>{`
        .ProfileBox {
          display: block;
          color: #fff;
        }
        .avatar {
          width: 50px;
          height: 50px;
          overflow: hidden;
          border-radius: 90px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      `}</style>
    </div>
  )
}

export default ProfileBox
