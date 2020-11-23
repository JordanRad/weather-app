import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
        fontFamily:"'Segoe UI',sans-serif",
        marginTop:"7px",
        marginBottom:"17px"
    },
    italic:{
        fontStyle:'italic'
    }
}));
const Heading = () => {
    const classes = useStyles();
    return ( 
        <Container className={classes.root}>
            <Typography  align="center" variant="h2">Weather App</Typography>
        </Container>
     );
}
 
export default Heading;