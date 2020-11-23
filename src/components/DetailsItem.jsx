import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";

const DetailsItem = (props) => {
    return (
        <Grid container
            direction="row"
            justify="space-between"
            alignItems="center">
            <Typography variant="body1">{props.todayString}</Typography>
            <Typography variant="body1">{props.temp}°C</Typography>
            <img alt="icon" src={props.iconURL} />
        </Grid>
    );
}

export default DetailsItem;