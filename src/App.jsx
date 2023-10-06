import { Fragment } from "react"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveDrawer from './Component/ResponsiveDrawer/ResponsiveDrawer.jsx';

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
        < ResponsiveDrawer/>
      </ThemeProvider>
    </Fragment>
  )
}

export default App
