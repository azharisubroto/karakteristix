import Link from 'next/link'

const FormHead = (props) => {
  const { type } = props
  return (
    <>
      <div className="d-flex justify-content-between align-items-top">
        <div>
          <h1 className="titleSignIn mb-0">{type === 'login' ? 'Sign In' : 'Sign Up'}</h1>
        </div>

        <div>
          <Link href="/login/" passHref>
            <a className="text-14 text-grey">
              {type === 'login' ? (
                <span>
                  Belum punya akun? <br />
                  <b>Sign Up</b> sekarang.
                </span>
              ) : (
                <span>
                  Anda sudah jadi anggota? <br />
                  <b>Log In</b> di sini.
                </span>
              )}
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default FormHead
