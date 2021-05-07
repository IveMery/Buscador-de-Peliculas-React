import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'


import Home from './components/Home'
import UltimosLanzamientos from "./components/UltimosLanzamientos";
import Populares from "./components/Populares";
import Error404 from "./components/Error404";
import Search from "./components/Search";

//import Carrusel from './components/Carrusel'
const useStyle = makeStyles({
  navitem: {
    //     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    //     border: 0,
    //     borderRadius: 3,
    //     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    marginRight: "20px",
    //     height: 48,
    //     padding: "0 30px",

  },

  navbar: {
    marginBottom: '0',
    position: 'sticky',
    backgroundColor: 'rgb(54, 57, 63)'
  }
})



const App = () => {
  const classes = useStyle()
  return (
    <div>
      <Router>
        <AppBar className={classes.navbar}>
          <Toolbar>
            <Link to='/' className={classes.navitem} >Inicio</Link>
            <Link to='/UltimosLanzamientos' className={classes.navitem}>Ultimos Lanzamientos</Link>
            <Link to='/Populares' className={classes.navitem}>Populares</Link>
            <Link to='/Buscar' className={classes.navitem}>Buscar</Link>
            🎬
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/UltimosLanzamientos' component={UltimosLanzamientos} />
          <Route exact path='/Populares' component={Populares} />
          <Route exact path='/Buscar' component={Search} />
          <Route path='*' component={Error404} />
        </Switch>
      </Router>


    </div>

  );
}

export default App;
