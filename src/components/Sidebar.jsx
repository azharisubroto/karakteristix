import LogoWhite from '@/components/LogoWhite'
import ProfileBox from '@/components/ProfileBox'
import SidebarMenu from '@/components/SidebarMenu'

const Sidebar = () => {
  return (
    <aside className="social-wrapper">
      {/* Logo white */}
      <LogoWhite />
      <div className="mb-4"></div>

      {/* Profile Box */}
      <ProfileBox className="mt-4" />

      <div className="divider"></div>

      <SidebarMenu className="mt-4" />

      {/* Styling */}
      <style jsx>{`
        aside {
          display: block;
          z-index: 1029;
          position: fixed;
          transition: all 0.3s ease-in-out;
          padding: 25px 0 0 50px;
          width: 380px;
          height: 100vh;
          top: 0;
          background: url(/img/sidebar.png) no-repeat center center;
          background-size: cover;
          color: #a9b7d0;
        }

        .divider {
          width: 90%;
          border-bottom: 2px solid #fff;
          margin-top: 30px;
        }
      `}</style>
    </aside>
  )
}

export default Sidebar
