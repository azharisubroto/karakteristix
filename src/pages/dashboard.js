import useUser from '@/utils/useUser'
import Head from 'next/head'
import DashboardLayout from '@/layouts/DashboardLayout'
import PageTitle from '@/components/PageTitle'
import DiagramCards from '@/components/DiagramCards'

const Dashboard = () => {
  const { user } = useUser({ redirectTo: '/login' })

  return (
    <>
      <Head>
        <title>Dashboard | {process.env.SITENAME}</title>
      </Head>

      {user && user.isLoggedIn && (
        <DashboardLayout>
          <PageTitle title="Dashboard" />

          <DiagramCards />

          {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        </DashboardLayout>
      )}
    </>
  )
}

export default Dashboard
