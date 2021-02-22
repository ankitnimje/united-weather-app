import WeatherCard from './components/WeatherCard';
import Navbar from './components/Navbar';

import { makeStyles } from '@material-ui/core/styles';

import background from './assets/background3.jpg';

const useStyles = makeStyles((theme) => ({
  App: {
    backgroundImage: `url(${background})`,
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
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Navbar />
      </div>
      <div className={classes.App}>
        <WeatherCard />
      </div>
    </>
  );
}

export default App;
