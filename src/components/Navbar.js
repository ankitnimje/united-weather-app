import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        paddingLeft: "50px"
      },
  }));



const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    United Weather
                </Typography>
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