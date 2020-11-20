import React from 'react';
import TextField from '@material-ui/core/TextField';
const Searchbar= (props) => {
    return ( 
        <TextField 
        id="cityInput" 
        label="Type city name" variant="outlined"
        fullWidth={true} />
     );
}
 
export default Searchbar;