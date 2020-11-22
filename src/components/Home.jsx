import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Heading from './Heading';
import Searchbar from './Searchbar';
import WeatherInfoPanel from './WeatherInfoPanel';
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.dark,
        justifyContent: "center",
        color: theme.palette.primary.contrastText,
        margin: 0,
        paddingTop: '10px',

    },
    responsive: {
        [theme.breakpoints.only('xs')]: {
            width: '100%'
        },
        [theme.breakpoints.only('sm')]: {
            width: '75%',
            margin:'auto'
        },
        [theme.breakpoints.only('md')]: {
            width: '65%',
            margin:'auto'
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
            margin:'auto'
        },
    }

}));
const Home = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Container max="lg">
                <Grid container>
                    <Heading />
                    <Grid container className={classes.responsive}>
                        <Searchbar />
                        <WeatherInfoPanel />
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default Home;