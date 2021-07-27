import PropTypes from 'prop-types'
import Head from 'next/head'
import DashboardLayout from '@/layouts/DashboardLayout'
import PageTitle from '@/components/PageTitle'
import dynamic from 'next/dynamic'
import withSession from '@/utils/session'
import MemberDashboard from '@/components/member/Dashboard'
const DiagramCards = dynamic(() => import('@/components/DiagramCards'), { ssr: false })

const Dashboard = ({ user }) => {
  return (
    <>
      <Head>
        <title>Dashboard | {process.env.SITENAME}</title>
      </Head>

      <DashboardLayout>
        <PageTitle title="Dashboard" />

        {user.data.role_id === 1 ? <DiagramCards /> : <MemberDashboard />}

        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      </DashboardLayout>
    </>
  )
}

Dashboard.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.any
  })
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get('user')

  if (user === undefined) {
    res.setHeader('location', '/login')
    res.statusCode = 302
    res.end()
    return { props: {} }
  }

  return {
    props: { user: req.session.get('user') }
  }
})

export default Dashboard
