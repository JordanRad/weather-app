import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Heading from './Heading';
import Searchbar from './Searchbar';
import WeatherInfoPanel from './WeatherInfoPanel';
import DetailsTabPanel from './DetailsTabPanel';
import { Grid } from "@material-ui/core";
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
            margin: 'auto'
        },
        [theme.breakpoints.only('md')]: {
            width: '60%',
            margin: 'auto'
        },
        [theme.breakpoints.up('md')]: {
            width: '40%',
            margin: 'auto'
        },
    }

}));
const Home = () => {
    const classes = useStyles();
    const [weatherData, setData] = useState(null);

    
    const updateWeatherData = (weatherData) => {
        setData(weatherData);
    }


    let currentWeatherDetails, filteredByToday,filteredByTomorrow, filteredNextDays;

    if (weatherData !== null) {
        //init and object which is being sent to WeatherInfoPanel as props
        currentWeatherDetails = {
            city: weatherData.city.name,
            country: weatherData.city.country,
            temperatureNow: weatherData.list[0].main,
            weather: weatherData.list[0].weather
        }

        //init date for current time
        let today = new Date()

        //init a filter value which indicates when is the end of today 
        //getTime() converts it to a number
        //divided by 1000, so it becomes the same time format as the API response
        let endofToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59).getTime() / 1000;

        filteredByToday = weatherData.list.filter(item => item.dt < endofToday);

        let temp = weatherData.list.filter((item, index) => index > filteredByToday.length - 1)

        filteredByTomorrow =temp.slice(0,8);

        filteredNextDays = temp.slice(8,temp.length-filteredByToday.length);
        //console.log(filteredByToday);
        // console.log(filteredNext3Days);

    }
    return (
        <Grid className={classes.root}>

            <Grid container spacing={0}>
                <Heading />
                <Grid container className={classes.responsive}>
                    <Searchbar onReciveDetailed={updateWeatherData}/>
                    <WeatherInfoPanel
                        currentWeatherDetails={currentWeatherDetails} />
                    <DetailsTabPanel
                        todaysDetails={filteredByToday}
                        tomorrowDetails={filteredByTomorrow}
                        nextDays={filteredNextDays} />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;