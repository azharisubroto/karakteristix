import LogoWhite from '@/components/LogoWhite'
import ProfileBox from '@/components/ProfileBox'

const Sidebar = () => {
  return (
    <aside className="social-wrapper">
      {/* Logo white */}
      <LogoWhite />
      <div className="mb-4"></div>

      {/* Profile Box */}
      <ProfileBox className="mt-4" />

      {/* Styling */}
      <style jsx>{`
        aside {
          display: block;
          z-index: 1029;
          position: fixed;
          transition: all 0.3s ease-in-out;
          box-shadow: 1px 0 20px 0 #3f4d67;
          padding: 25px 0 0 50px;
          width: 380px;
          height: 100vh;
          top: 0;
          background: url(/img/sidebar.png) no-repeat center center;
          background-size: cover;
          color: #a9b7d0;
        }
      `}</style>
    </aside>
  )
}

export default Sidebar
