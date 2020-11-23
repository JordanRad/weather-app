import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Container, Divider, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: "10px",
        marginRight: "10px",
        padding: "10px"
    },
    box: {
        backgroundColor: theme.palette.primary.main
    },
    divider:{
        marginBottom:'3%',
        marginTop:'1%'
    }
}));
const WeatherInfoPanel = (props) => {
    const classes = useStyles();

    console.log(props.currentWeatherDetails);

    if (props.currentWeatherDetails) {
        let iconCode = props.currentWeatherDetails.weather[0].icon
        return (
            <Container className={classes.root}>
                <Box className={classes.box} border={1} borderRadius="borderRadius" padding={2} margin={0}>
                <Typography variant="h3">{props.currentWeatherDetails.country}, {props.currentWeatherDetails.city} </Typography>
                <Divider className={classes.divider}/>
                    <Grid container>
                        <Grid container
                            direction="row"
                            alignItems="center">
                            <Typography variant="body1">{props.currentWeatherDetails.weather[0].main}, {props.currentWeatherDetails.weather[0].description}</Typography>
                        </Grid>

                        <Grid container
                            direction="row"
                            justify="space-around"
                            alignItems="center">
                            <Typography variant="h5">
                                Now: {props.currentWeatherDetails.temperatureNow.temp.toFixed(1)}°C
                            </Typography>
                            <img src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`} />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        );
    } else {
        return (
            <Container className={classes.root}>
                <Box className={classes.box} border={1} borderRadius="borderRadius" padding={2} margin={0}>
                    <Container>
                        <Typography variant="h6">No selected city</Typography>
                    </Container>
                </Box>
            </Container>
        )
    }
}

export default WeatherInfoPanel;