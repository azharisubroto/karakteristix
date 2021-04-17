import LoginForm from '@/components/LoginForm'
import FrontLayout from '@/layouts/FrontLayout'
import FormHead from '@/components/FormHead'

export default function Home() {
  return (
    <>
      <main>
        <FrontLayout>
          {/* Sign Head */}
          <FormHead type="login" />

          <LoginForm />
        </FrontLayout>
      </main>

      <style jsx>{`
        main {
          background: #fff url('../img/signin.png') no-repeat center bottom;
          background-size: 100% auto;
          min-height: 100vh;
        }
      `}</style>
    </>
  )
}
