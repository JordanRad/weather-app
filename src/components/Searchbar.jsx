import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flex: 1,
        marginTop:'3%',
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary.main,
        },

    },
    input: {
        color: theme.palette.secondary.main,
    },
    label: {
        color: theme.palette.secondary.main,
        fontStyle: 'italic',
        opacity: 0.6
    },
    button: {
        flex: 0.15,
        marginLeft: 'auto',
        height: "75%",
        alignSelf: "center"
    },
    textField: {
        flex: 0.80,
        color: theme.palette.secondary.main
    }
}));
const Searchbar = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TextField
                className={classes.textField}
                color="secondary"
                id="cityInput"
                label="Type city name" variant="outlined"
                inputProps={{className: classes.input}}
                InputLabelProps={{className: classes.label}}
            />
            <Button className={classes.button} variant="contained" color="secondary">Show</Button>
        </div>
    );
}

export default Searchbar;