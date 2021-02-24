import useUser from '@/utils/useUser'
import Head from 'next/head'
import DashboardLayout from '@/layouts/DashboardLayout'

const Dashboard = () => {
  const { user } = useUser({ redirectTo: '/login' })

  return (
    <>
      <Head>
        <title>Dashboard | {process.env.SITENAME}</title>
      </Head>

      {user && user.isLoggedIn && (
        <DashboardLayout>
          <div>Test Dashboard</div>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </DashboardLayout>
      )}
    </>
  )
}

export default Dashboard
