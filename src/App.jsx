import { Fragment } from "react"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography } from "@mui/material";


const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    fontFamily: ['Poppins', 'sans - serif'].join(',')
  }

});

function App() {

  return (
    <Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Typography variant="h1" sx={{ fontFamily: 'Poppins' }} >laeth raed nueirat</Typography>
      </ThemeProvider>
    </Fragment>
  )
}

export default App
