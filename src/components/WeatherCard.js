import React, { useState, useEffect } from "react";

import WeatherInfo from './WeatherInfo';
import getLocation from '../Location/getLocation';

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Input,
  FormControl,
  InputLabel,
  InputAdornment,
  Card,
  CardContent,
  Typography
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

// console.log(`API_KEY: ${API_KEY}`);

const useStyles = makeStyles((theme) => ({
  atmospheric: {
    fontSize: "28px",
    padding: "5px"
  },
  searchbar : {
    padding: "20px"
  },
  card: {
    backgroundColor: "white",
    textAlign: "center"
  },
  weatherInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 550,
    minHeight: 400,
  },
  wi: {
    color: "#673ab7"
  },
  textContent: {
    paddingTop: "40px"
  }
}));

const WeatherCard = () => {
  const classes = useStyles();
  
  const [city, setCity] = useState(null);
  const [location, setLocation] = useState(null);
  const [search, setSearch] = useState("Houston");
  
  useEffect(() => {
    getLocation(setLocation);
  }, []);

  useEffect(() => {
    if(location) {
      setSearch(location.locality)
    }
  }, [location])

  useEffect(() => {
    const fetchApi = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`;
      const response = await fetch(URL);
      const data = await response.json();
      setCity(data);
    }
    fetchApi();
  }, [search]);

  // console.log(city);


  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearch(event.target.value);
    }
  };

  return (
    <Grid container justify="center">
      <Grid item className={classes.searchbar}>
        <FormControl fullWidth>
          <InputLabel htmlFor="standard-adornment-amount">
            Enter city name
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            onKeyDown={handleKeyDown}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>

      {
        city && city.cod === 200 ? (
          <WeatherInfo 
            city={search} 
            country={city.sys.country} 
            temp={parseInt(city.main.temp)} 
            realFeel={parseInt(city.main.feels_like)} 
            maxTemp={parseInt(city.main.temp_max)}
            minTemp={parseInt(city.main.temp_min)}
            wind={city.wind.speed}
            windDeg={city.wind.deg}
            iconId={city.weather[0].icon}
            desc={city.weather[0].description}
            dt={city.sys.sunrise}
            humidity={city.main.humidity}
          />
        ) :
        <Grid item xs={12} className={classes.weatherInfo}>
          <Card className={classes.card} >
            <CardContent>
              <Typography
                  variant="h2"
                  className="big-temp"
                  color="textPrimary"
                  component="h2"
                  style={{ fontFamily: "Montserrat", paddingTop: "30px" }}
              >
                  No City Found
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      }      
    </Grid>
  );
};

export default WeatherCard;