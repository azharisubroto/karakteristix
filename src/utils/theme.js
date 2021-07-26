import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#00326b',
    },
    secondary: {
      main: '#707070',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;