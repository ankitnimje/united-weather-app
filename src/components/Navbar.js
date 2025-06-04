import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        paddingLeft: "50px"
      },
  }));



const Navbar = ({ darkMode, setDarkMode }) => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    United Weather
                </Typography>
                <FormControlLabel
                    control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} color="default" />}
                    label="Dark Mode"
                />
                <Button
                    color="inherit"
                    onClick={()=> window.open("https://openweathermap.org/api", "_blank")}
                >OpenWeatherMap API</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;