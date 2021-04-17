import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'
// import Link from 'next/link'
import fetchJson from '@/utils/fetchJson'
import useUser from '@/utils/useUser'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles({
  formControl: {
    '& input': {
      padding: '13px 20px'
    }
  }
})

const RegisterForm = (props) => {
  const classes = useStyles(props)
  const { register, handleSubmit, errors } = useForm()

  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)
  const [agree, setAgree] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  // Handle field changes
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  useUser({ redirectTo: '/dashboard', redirectIfFound: true })

  // Toggle Password
  const handleClickShowPassword = () => {
    const isshow = !showPassword
    setShowPassword(isshow)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  /**
   * Handle Login
   */
  const onSubmit = async () => {
    setLoading(true)

    const payload = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password
    }

    try {
      await fetchJson('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then((res) => {
        console.log(res)
      })
    } catch (error) {
      //console.error('An unexpected error happened:', error)
      setErrorMsg('An error occured, please try again later')
      setLoading(false)
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="mt-md-4">
      <InputLabel htmlFor="nama-depan">Nama Depan</InputLabel>
      <OutlinedInput
        disabled={loading}
        id="nama-depan"
        name="first_name"
        labelWidth={0}
        placeholder="Budi"
        onChange={handleChange('first_name')}
        value={values.first_name}
        className={classes.formControl}
        inputRef={register({
          required: 'Nama depan tidak boleh kosong!'
        })}
        error={!!errors.first_name}
        fullWidth
      />
      {errors.first_name && <span className="error">{errors.first_name.message}</span>}

      <div className="my-4"></div>

      <InputLabel htmlFor="nama-belakang">Nama Belakang</InputLabel>
      <OutlinedInput
        disabled={loading}
        id="nama-belakang"
        name="last_name"
        labelWidth={0}
        placeholder="Santoso"
        onChange={handleChange('last_name')}
        value={values.last_name}
        className={classes.formControl}
        inputRef={register({
          required: 'Nama belakang tidak boleh kosong!'
        })}
        error={!!errors.last_name}
        fullWidth
      />
      {errors.last_name && <span className="error">{errors.first_name.message}</span>}

      <div className="my-4"></div>

      <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
      <OutlinedInput
        disabled={loading}
        id="outlined-adornment-email"
        name="email"
        labelWidth={0}
        placeholder="budisantoso@karakteristix.com"
        className={classes.formControl}
        onChange={handleChange('email')}
        inputRef={register({
          required: 'Email tidak boleh kosong!',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'You must provide a valid email address!'
          }
        })}
        error={!!errors.email}
        fullWidth
      />
      {errors.email && <span className="error">{errors.email.message}</span>}

      <div className="my-4"></div>

      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        disabled={loading}
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange('password')}
        fullWidth
        labelWidth={0}
        className={classes.formControl}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        inputRef={register({
          required: {
            value: true,
            message: 'Password harus diisi'
          }
        })}
        error={!!errors.password}
      />

      {errors.password && <span className="error">{errors.password.message}</span>}

      <div className="mt-4 d-flex">
        <div>
          <Checkbox
            inputProps={{ id: 'agree' }}
            color="primary"
            onChange={() => {
              let toggleAgree = !agree
              setAgree(toggleAgree)
            }}
          />
        </div>
        <div>
          <label htmlFor="agree">
            <span className="text-grey">Membuat akun berarti Anda menyetujui </span>
            <a href="/syarat-dan-ketentuan/">
              <span style={{ color: '#00326B', fontWeight: '700', marginLeft: 0 }}> Syarat dan ketentuan,</span>
            </a>{' '}
            <span className="text-grey">serta </span>
            <a href="/kebijakan/">
              <span style={{ color: '#00326B', fontWeight: '700', marginLeft: 0 }}> kebijakan,</span>
            </a>{' '}
            <span className="text-grey">dan </span>
            <a href="/pengaturan-notifikasi/">
              <span style={{ color: '#00326B', fontWeight: '700', marginLeft: 0 }}>pengaturan notifikasi</span>
            </a>{' '}
            <span className="text-grey">standar kami.</span>
          </label>
        </div>
      </div>

      <div className="text-danger">{errorMsg}</div>

      {/* SUBMIT BUTTON */}
      <Button
        color="primary"
        type="submit"
        variant="contained"
        style={{ borderRadius: 90 }}
        size="large"
        className="mt-3">
        <span className="px-4">
          <strong>{loading ? 'LOGGING IN...' : 'LOG IN'}</strong>
        </span>
      </Button>
    </form>
  )
}

export default RegisterForm
