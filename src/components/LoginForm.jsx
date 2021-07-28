import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from './Button'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/styles'
import axios from 'axios'
import { useRouter } from 'next/router'

const useStyles = makeStyles({
  formControl: {
    background: '#fff',
    '& input': {
      padding: '13px 20px',
      background: '#fff'
    }
  },
  background: '#fff'
})

/**
 * @classdesc
 * Used for login page
 *
 * ## Import
 * ```jsx
 * import Card from '@/components/LoginForm'
 * ```
 *
 * @category UI
 * @component
 * @example
 * return (
 *  <div style={{width: '100%'}}><LoginForm /></div>
 * )
 * @return {React.ReactElement} - React component
 */
const LoginForm = (props) => {
  const classes = useStyles(props)
  const { register, handleSubmit, errors } = useForm()
  const router = useRouter()

  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  /**
   * @fires LoginForm#toggleVisiblePassword
   */
  const handleClickShowPassword = () => {
    /**
     * @summary An event triggered when user clicked the eye icon on password field
     *
     * @event LoginForm#toggleVisiblePassword
     * @type {boolean}
     * @property {boolean} showPassword - Indicates whether the password is visible.
     * @return {boolean}
     */
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  /**
   * This is a function returning data from the
   * REST API. It returns a newly created type: {@link Promise.<Object>}
   *
   * @method
   * @param {Object} credential
   * @param {String} credential.email - user email
   * @param {String} credential.password - user password
   *
   * @return {Promise.<Object>}
   * @throws {Error}
   */
  const onSubmit = async (credential) => {
    console.log(credential)
    setLoading(true)

    const payload = {
      email: values.email,
      password: values.password
    }

    try {
      await axios.post('/api/auth/login', payload).then(() => {
        router.push('/dashboard')
      })
    } catch (error) {
      setErrorMsg('Credentials failed, please check your login details again.')
      setLoading(false)
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
      <div className="mb-1"></div>
      <OutlinedInput
        disabled={loading}
        id="outlined-adornment-email"
        name="email"
        placeholder="budisantoso@karakteristix.com"
        onChange={handleChange('email')}
        className={classes.formControl}
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
        type={values.showPassword ? 'text' : 'password'}
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange('password')}
        fullWidth
        className={classes.formControl}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end">
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
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

      <div className="my-4"></div>

      {/* FORGOT LINK */}
      <div className="mt-1 mb-3">
        Lupa{' '}
        <Link href="/forgot/password" passHref>
          <a>
            <strong>Password</strong>
          </a>
        </Link>
      </div>

      <div className="my-4">{errorMsg}</div>

      {/* SUBMIT BUTTON */}
      <Button type="submit" variant="filled" className="mt-3">
        {loading ? 'LOGGING IN...' : 'LOG IN'}
      </Button>
    </form>
  )
}

export default LoginForm
