import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flex: 1,
        marginTop: '3%',
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary.main,
        },
        padding: "2%"

    },
    input: {
        color: "black",
    },
    label: {
        color: "black",
        opacity: 0.9
    },
    button: {
        flex: 0.15,
        marginLeft: 'auto',
        height: "75%",
        alignSelf: "center"
    },
    textField: {
        flex: 0.80,
        color: "black"
    }
}));
const API_KEY = '4ddb30cd24fd9375c6f33d81fe8bdde7';
const Searchbar = (props) => {
    const classes = useStyles();

    const [cityName, setCityName] = useState("Eindhoven");
    const [notFound, setNotFound] = useState(false)
    const onClickHandler = (e) => {
        console.log(notFound)
        let typedCityName = document.getElementById('cityInput').value;
        setCityName(typedCityName)
    }

    useEffect(() => {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`;
        axios.get(url)
            .then(response => { 
                props.onReciveDetailed(response.data)
             })
            .catch(err => {
                alert("Such city name probably does not exist")
                console.log("Not Found")
            })
    }, [cityName])


    return (
        <div className={classes.root}>
            <TextField
                className={classes.textField}
                color="secondary"
                id="cityInput"
                label="Type city name" variant="outlined"
                inputProps={{ className: classes.input }}
                InputLabelProps={{ className: classes.label }}
            />
            <Button className={classes.button} variant="contained" color="secondary" onClick={onClickHandler}>Show</Button>
            
        </div>
    );
}

export default Searchbar;