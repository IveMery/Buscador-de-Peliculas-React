import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'

import styled from 'styled-components';



import Home from './components/Home'
import UltimosLanzamientos from "./components/UltimosLanzamientos";
import Populares from "./components/Populares";
import Error404 from "./components/Error404";
import Search from "./components/Search";
import DetallePelicula from "./components/DetallePelicula"
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './styles/theme'
import PeliculasTendenciaDetalle from "./components/PeliculasTendenciaDetalle";
import {StyledLink} from './components/Commons'
const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
  margin:0;
}



`
const useStyle = makeStyles({
  navitem: {
    color: "white",
    marginRight: "20px",
    fontFamily:'Bebas Neue',
    fontSize:'25px'
   


  },

  navbar: {
    marginBottom: '0',
    position: 'sticky',
    backgroundColor: '#ff005c'
  }
})



const App = () => {
  const classes = useStyle()
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <AppBar className={classes.navbar}>
            <Toolbar>
              <StyledLink to='/' className={classes.navitem} >Inicio</StyledLink>
              <StyledLink to='/UltimosLanzamientos' className={classes.navitem}>Ultimos Lanzamientos</StyledLink>
              <StyledLink to='/Populares' className={classes.navitem}>Populares</StyledLink>
              <StyledLink to='/Buscar' className={classes.navitem}>Buscar</StyledLink>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/UltimosLanzamientos' component={UltimosLanzamientos} />
            <Route exact path='/Populares' component={Populares} />
            <Route exact path='/Buscar' component={Search} />
            <Route exact path='/PeliculasTendenciaDetalle' component={PeliculasTendenciaDetalle} />
            <Route exact path='/DetallePelicula/:id' component={DetallePelicula} />

            <Route path='*' component={Error404} />
          </Switch>
        </Router>
      </ThemeProvider>

    </div>

  );
}

export default App;
