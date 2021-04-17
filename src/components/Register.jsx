import RegisterForm from '@/components/RegisterForm'
import FrontLayout from '@/layouts/FrontLayout'
import FormHead from '@/components/FormHead'

export default function Home() {
  return (
    <>
      <main>
        <FrontLayout>
          {/* Sign Head */}
          <FormHead type="register" />

          {/* Form render */}
          <div className="pb-4">
            <RegisterForm />
          </div>
        </FrontLayout>
      </main>

      <style jsx>{`
        main {
          background: #fff url('../img/Sign_Up2x.ed04a4fe.png') no-repeat center bottom;
          background-size: 100% auto;
          min-height: 100vh;
        }
      `}</style>
    </>
  )
}
