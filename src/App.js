import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Heading from './components/Heading';
import Searchbar from './components/Searchbar';
import WeatherInfoPanel from './components/WeatherInfoPanel';
const App = () => {
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: "#355661",
        dark: "#0B2027",
        light:"#11222",
        contrastText: "#F6F1D1"
      },
      secondary: {
        main: "#CFD7C7",
        light: "#F6F1D1"
      },
    },
  });
  theme = responsiveFontSizes(theme);
  const useStyles = makeStyles(theme => ({
    rooot: {
      backgroundColor:theme.palette.primary.dark,
      justifyContent: "center",
      color:theme.palette.primary.contrastText,
      margin:0,
      width:'100%'
    }
  }));

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.rooot}>
        <Heading />
        <Searchbar />
        <WeatherInfoPanel />
      </Container>
    </ThemeProvider>
  );
}

export default App;
