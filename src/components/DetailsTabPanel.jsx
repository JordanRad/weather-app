import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DetailsItem from './DetailsItem';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function allyProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const convertNumberToDayString = (index) => {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][index] || ''
}
const getTodayString = (item)=>{
  let date = new Date(item.dt * 1000)
  let todayString = `${convertNumberToDayString(date.getDay())} at ${date.getHours() - 1}:00`;
  return todayString;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    margin: "10px",
    marginTop: "0",
    marginRight: "20px",
    width: '100%'
  },
  hidden: {
    display: 'none'
  }
}));

const DetailsTabPanel = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let todayItemsList, tomorrowItemsList, nextDaysItemsList;
  if (props.todaysDetails) {
    //First Tab content
    todayItemsList = props.todaysDetails.map((item, index) => {
      return (
        <DetailsItem
          key={index}
          todayString={getTodayString(item)}
          temp={item.main.temp.toFixed(0)}
          iconURL={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
        />
      )
    })
    //End First Tab content

    //Second Tab content
    tomorrowItemsList = props.tomorrowDetails.map((item, index) => {
      return (
        <DetailsItem
          key={index * 12}
          todayString={getTodayString(item)}
          temp={item.main.temp.toFixed(0)}
          iconURL={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
        />
      )

    })
    //End Second Tab content

    //Third Tab content
    nextDaysItemsList = props.nextDays.map((item, index) => {
      let validHours = [5,6,7,14,15,16]
      let date = new Date(item.dt * 1000) 
      if (validHours.includes(date.getHours())) {
        return (
          <DetailsItem
            key={index * 133}
            todayString={getTodayString(item)}
            temp={item.main.temp.toFixed(0)}
            iconURL={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
          />
        )
      }
    })
    //End Third Tab content

    let itemsList = [todayItemsList,tomorrowItemsList,nextDaysItemsList]
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Today" {...allyProps(0)} />
            <Tab label="Tomorrow" {...allyProps(1)} />
            <Tab label="Next days" {...allyProps(2)} />
          </Tabs>
        </AppBar>
        {itemsList.map((item,index)=><TabPanel value={value} index={index}>{item}</TabPanel>)}
      </div>
    );
  } else {
    return (
      <div className={classes.hidden}>

      </div>
    )
  }
}
export default DetailsTabPanel;