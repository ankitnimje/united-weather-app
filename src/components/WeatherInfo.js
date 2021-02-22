import React, {useState} from 'react';

import { makeStyles } from "@material-ui/core/styles";

import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    Typography
  } from "@material-ui/core";

import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
atmospheric: {
    fontSize: "28px",
    padding: "5px"
},
card: {
    minWidth: "50vw",
    minHeight: "80wh",
    backgroundColor: "white",
    textAlign: "center",
},
cardTop: {
    padding: "20px 20px 0 20px",
},  
weatherInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
},
wi: {
    color: "#673ab7"
},
extraParams: {
    paddingTop: "20px",
    display: "flex",
    justifyContent: "space-between",
},
flexItem: {
    justifyContent: "space-between",
},
toggleTemp: {
    paddingLeft: "20px",
    paddingTop: "20px",
    float: "right"
},
}));

const WeatherInfo = (props) => {
    const classes = useStyles();

    const [checked, setChecked] = useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };

    // Time
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    let hr = today.getHours();
    let ampm = "AM";
    if( hr > 12 ) {
        hr -= 12;
        ampm = "PM";
    } else if(hr === 0) {
        hr = 12;
    }

    let minutes = today.getMinutes();
    if(minutes < 10) {
        minutes = `0${minutes}`;
    }

    const day = days[ today.getDay() ];
    const month = monthNames[today.getMonth()];
    const time = `${hr}:${minutes} ${ampm}`;

    // console.log(time);

    //Wind Direction
    const deg = props.windDeg;
    let windDirection = '';

    if(deg >= 348.75 || deg < 11.25) {windDirection = "N";}
    else if(deg >= 11.25 || deg < 33.75) {windDirection = "NNE";}
    else if(deg >= 33.75 || deg < 56.25) {windDirection = "NE";}
    else if(deg >= 56.25 || deg < 78.75) {windDirection = "ENE";}
    else if(deg >= 78.75 || deg < 101.25) {windDirection = "E";}
    else if(deg >= 101.25 || deg < 123.75) {windDirection = "ESE";}
    else if(deg >= 123.75 || deg < 146.25) {windDirection = "SE";}
    else if(deg >= 146.25 || deg < 168.75) {windDirection = "SSE";}
    else if(deg >= 168.75 || deg < 191.25) {windDirection = "S";}
    else if(deg >= 191.25 || deg < 213.75) {windDirection = "SSW";}
    else if(deg >= 213.75 || deg < 236.25) {windDirection = "SW";}
    else if(deg >= 236.25 || deg < 258.75) {windDirection = "WSW";}
    else if(deg >= 258.75 || deg < 281.25) {windDirection = "W";}
    else if(deg >= 281.25 || deg < 303.75) {windDirection = "WNW";}
    else if(deg >= 303.75 || deg < 326.25) {windDirection = "NW";}
    else if(deg >= 326.25 || deg < 348.75) {windDirection = "NNW";}


    return (
        <>
            <Grid item xs={12} className={classes.weatherInfo}>
                <Card className={classes.card}>
                    <FormGroup>
                        <FormControlLabel
                            className={classes.toggleTemp}
                            control={<Switch checked={checked} onChange={toggleChecked} />}
                            label="°C - °F"
                        />
                    </FormGroup>
                    <CardHeader 
                        className={classes.cardTop}
                        titleTypographyProps={{variant:'h4' }}
                        title={props.city + ", " + props.country} 
                        subheader={`${month} ${dd}, ${day}, ${time}`}
                    />
                    <CardContent>
                        <img src={`http://openweathermap.org/img/wn/${props.iconId}@2x.png`} alt="weather-icon" />
                        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                            {props.desc}
                        </Typography>
                        <Typography
                            variant="h2"
                            className="big-temp"
                            color="textPrimary"
                            component="h2"
                        >
                            {checked ? (`${parseInt((props.temp) * 1.8 + 32)}°F`) : `${(props.temp)}°C`}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                            Feels like {checked ? (`${parseInt((props.realFeel) * 1.8 + 32)}°F`) : `${(props.realFeel)}°C`}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                            <p>
                                Max Temp: {checked ? (`${parseInt((props.maxTemp) * 1.8 + 32)}°F`) : `${(props.maxTemp)}°C`}
                                &nbsp;&nbsp;|&nbsp;&nbsp;
                                Min Temp: {checked ? (`${parseInt((props.minTemp) * 1.8 + 32)}°F`) : `${(props.minTemp)}°C`}
                            </p>
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            color="textSecondary"
                            gutterBottom
                            className={classes.extraParams}
                        >
                            <p className="flexItem">Wind Speed: {props.wind} m/h {windDirection}</p>
                            <p className="flexItem">Humidity: {props.humidity} %</p>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default WeatherInfo;