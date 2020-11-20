import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
const Heading = () => {
    return ( 
        <Container>
            <Typography align="center" variant="h3">Weather App</Typography>
            <Typography align="center" variant="h6">by Jordan Radushev</Typography> 
        </Container>
     );
}
 
export default Heading;