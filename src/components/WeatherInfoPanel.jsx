import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: "10px",
        marginRight: "10px",
        padding: "10px"
    },
    boxOne:{
        backgroundColor:theme.palette.primary.main
    },
    boxTwo:{
        backgroundColor:theme.palette.primary.light
    }
}));
const WeatherInfoPanel = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Box className={classes.boxOne} border={0} padding={2} margin={0}>
                <Typography>City now weather</Typography>
            </Box>
            <Box className={classes.boxTwo} border={0} padding={2} margin={0}>
                <Typography>Day 1 11* icon</Typography>
                <Typography>Day 1 11* icon</Typography>
                <Typography>Day 1 11* icon</Typography>
                <Typography>Day 1 11* icon</Typography>
            </Box>
        </Container>
    );
}

export default WeatherInfoPanel;