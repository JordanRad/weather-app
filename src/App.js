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
      main: '#9aa3bd',//"#355661",
      dark: "#6C799E",
      light: "#EBEcf1",
    },
    secondary: {
      main: "#EBDE97",
      dark: "#a29138"
    },
  },
  typography: {
    "fontFamily": `"Segoe UI", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }

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
