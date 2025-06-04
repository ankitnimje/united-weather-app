import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import Navbar from './components/Navbar';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import background from './assets/background3.jpg';

const useStyles = makeStyles((theme) => ({
  App: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    padding: "20px"
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  const classes = useStyles();
  const backgroundStyle = darkMode
    ? { backgroundColor: theme.palette.background.default }
    : { backgroundImage: `url(${background})` };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className={classes.App} style={backgroundStyle}>
        <WeatherCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
