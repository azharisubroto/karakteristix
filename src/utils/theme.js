import { createTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#00326b'
    },
    secondary: {
      main: '#707070'
    },
    background: {
      default: '#fff'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Open Sans',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})

export default theme
