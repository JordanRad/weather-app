import React from 'react';
import { responsiveFontSizes } from '@material-ui/core/styles';
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline
} from "@material-ui/core";
import Home from './components/Home';
let theme = createMuiTheme({

  palette: {
    primary: {
      main: '#C7CCDB',//"#355661",
      dark: "#767B91",
      light: "#E1E5EE",
    },
    secondary: {
      main: "#823329",
      light: "#2A324B"
    },
  },

});
theme = responsiveFontSizes(theme);
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
